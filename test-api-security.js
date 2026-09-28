import assert from 'node:assert/strict';
import handler from './api/sync.js';

function invoke({ method, room, body, headers = {} }) {
  return new Promise((resolve, reject) => {
    const req = {
      method,
      url: `/api/sync?room=${encodeURIComponent(room)}`,
      query: { room },
      body,
      headers,
    };
    const responseHeaders = {};
    const res = {
      statusCode: 200,
      setHeader(name, value) {
        responseHeaders[name] = value;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(payload) {
        resolve({ status: this.statusCode, body: payload, headers: responseHeaders });
        return this;
      },
      end(payload = '') {
        resolve({ status: this.statusCode, body: payload, headers: responseHeaders });
      },
    };
    Promise.resolve(handler(req, res)).catch(reject);
  });
}

const room = `SECURITY_TEST_${Date.now()}`;
const create = await invoke({
  method: 'POST',
  room,
  body: {
    room,
    student: {
      id: 'student-security-test',
      name: 'Bé Kiểm Thử',
      pin: '9876',
      completedTasks: ['secret-task'],
      redeemedRewards: ['secret-reward'],
      stars: 42,
      grade: 2,
      completedTasksCount: 1,
    },
  },
});

assert.equal(create.status, 200);
assert.equal(create.body.students[0].stars, 42);
assert.equal('pin' in create.body.students[0], false);
assert.equal('completedTasks' in create.body.students[0], false);
assert.equal('redeemedRewards' in create.body.students[0], false);

const read = await invoke({ method: 'GET', room });
assert.equal(read.status, 200);
assert.equal(read.body.students.length, 1);
assert.equal('pin' in read.body.students[0], false);

const duplicateName = await invoke({
  method: 'POST',
  room,
  body: {
    room,
    student: {
      id: 'different-id',
      name: '  BÉ   KIỂM THỬ ',
      stars: 1,
    },
  },
});
assert.equal(duplicateName.status, 409);

const deniedDelete = await invoke({ method: 'DELETE', room });
assert.equal(deniedDelete.status, 403);

console.log('✓ API chỉ trả dữ liệu bảng xếp hạng tối thiểu');
console.log('✓ PIN và tiến trình chi tiết không được lưu/trả về');
console.log('✓ Xóa phòng bị chặn khi không có quyền quản trị');
console.log('✓ API chặn tên trùng trong cùng phòng thi đua');
