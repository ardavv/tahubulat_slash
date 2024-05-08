import React, { useState } from 'react';

const DropdownChange = () => {
  const [selectedLevel, setSelectedLevel] = useState('');
  
  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  return (
    <div>
      <label>Pilih level:</label>
      <select value={selectedLevel} onChange={handleLevelChange}>
        <option value="beginner">Pemula</option>
        <option value="intermediate">Menengah</option>
        <option value="expert">Ahli</option>
      </select>

      {/* Kondisional rendering berdasarkan nilai dropdown yang dipilih */}
      {selectedLevel === 'beginner' && (
        <div>
          <h2>Selamat datang di level pemula!</h2>
          {/* Tampilkan konten khusus untuk level pemula */}
        </div>
      )}

      {selectedLevel === 'intermediate' && (
        <div>
          <h2>Selamat datang di level menengah!</h2>
          {/* Tampilkan konten khusus untuk level menengah */}
        </div>
      )}

      {selectedLevel === 'expert' && (
        <div>
          <h2>Selamat datang di level ahli!</h2>
          {/* Tampilkan konten khusus untuk level ahli */}
        </div>
      )}
    </div>
  );
};

export default DropdownChange;