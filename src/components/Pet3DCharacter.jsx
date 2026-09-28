import React from 'react';
import { getAssetUrl } from '../utils/assetHelper';

const PET_ATLAS_POSITION = {
  dino: '0% 0%',
  dragon: '50% 0%',
  chick: '100% 0%',
  bunny: '0% 100%',
  unicorn: '50% 100%',
  puppy: '100% 100%',
};

export default function Pet3DCharacter({
  type = 'dino',
  mood = 'idle',
  isHopping = false,
  isDragging = false,
  eatingTreat = null,
  compact = false,
}) {
  const position = PET_ATLAS_POSITION[type] || PET_ATLAS_POSITION.dino;
  const isMoving = isHopping || isDragging;

  return (
    <div
      className={`pet-3d-stage ${compact ? 'pet-3d-stage-compact' : ''} ${
        isMoving ? 'pet-3d-running' : 'pet-3d-idle'
      } ${mood === 'happy' ? 'pet-3d-happy' : ''} ${mood === 'dancing' ? 'pet-3d-dancing' : ''}`}
      aria-label="Thú cưng 3D đang chuyển động"
      role="img"
    >
      <div className="pet-3d-shadow" />
      <div
        className="pet-3d-sprite"
        style={{
          backgroundImage: `url("${getAssetUrl('/pets/pet-atlas-3d.png')}")`,
          backgroundPosition: position,
        }}
      />
      {mood === 'eating' && (
        <span className="pet-3d-treat" aria-hidden="true">
          {eatingTreat === 'icecream' ? '🍦' : eatingTreat === 'milk' ? '🥛' : '🍎'}
        </span>
      )}
    </div>
  );
}
