import React, { useState, useRef } from 'react';
import { GalleryImage, CategoryType } from '../types';

interface AdminProps {
  onBack: () => void;
  images: GalleryImage[];
  setImages: React.Dispatch<React.SetStateAction<GalleryImage[]>>;
}

const Admin: React.FC<AdminProps> = ({ onBack, images, setImages }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Upload State
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [category, setCategory] = useState<CategoryType>('SIMPLE');
  const [description, setDescription] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1234') { // Simple hardcoded password
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewImageFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = () => {
    if (!previewUrl) {
      alert('이미지를 선택해주세요.');
      return;
    }

    const newImage: GalleryImage = {
      id: `img-${Date.now()}`,
      src: previewUrl,
      category: category,
      alt: description || 'NAILOWA Art',
    };

    setImages(prev => [newImage, ...prev]);
    
    // Reset form
    setNewImageFile(null);
    setPreviewUrl('');
    setDescription('');
    if (fileInputRef.current) fileInputRef.current.value = '';
    alert('이미지가 성공적으로 추가되었습니다.');
  };

  const handleDeleteImage = (id: string) => {
    if (window.confirm('정말 이 이미지를 삭제하시겠습니까?')) {
      setImages(prev => prev.filter(img => img.id !== id));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-serif text-center mb-6 text-stone-800">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-stone-300 rounded-sm focus:outline-none focus:border-stone-500"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-stone-900 text-white font-bold tracking-widest hover:bg-stone-800 transition-colors"
            >
              LOGIN
            </button>
            <button
              type="button"
              onClick={onBack}
              className="w-full py-3 text-stone-500 text-sm hover:text-stone-800 underline"
            >
              사이트로 돌아가기
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif text-stone-900">Admin Dashboard</h1>
          <button 
            onClick={onBack}
            className="px-6 py-2 bg-white border border-stone-300 text-stone-600 hover:bg-stone-100 text-sm"
          >
            사이트로 돌아가기
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded shadow-sm sticky top-6">
              <h3 className="text-lg font-bold mb-6 border-b border-stone-100 pb-2">이미지 업로드</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-2">이미지 파일 선택</label>
                  <input 
                    type="file" 
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="w-full text-sm text-stone-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-stone-100 file:text-stone-700 hover:file:bg-stone-200"
                  />
                </div>

                {previewUrl && (
                  <div className="aspect-[3/4] w-full bg-stone-100 rounded overflow-hidden relative">
                     <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-2">카테고리</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value as CategoryType)}
                    className="w-full p-2 border border-stone-300 rounded text-sm"
                  >
                    <option value="SIMPLE">심플 (SIMPLE)</option>
                    <option value="FANCY">화려함 (FANCY)</option>
                    <option value="WEDDING">웨딩 (WEDDING)</option>
                    <option value="PEDI">페디 (PEDI)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-2">설명 (Alt Text)</label>
                  <input 
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="예: 가을 버건디 네일 아트"
                    className="w-full p-2 border border-stone-300 rounded text-sm"
                  />
                </div>

                <button 
                  onClick={handleAddImage}
                  className="w-full py-3 bg-blue-600 text-white font-bold text-sm tracking-wider hover:bg-blue-700 transition-colors rounded-sm"
                >
                  등록하기
                </button>
              </div>
            </div>
          </div>

          {/* List Section */}
          <div className="lg:col-span-2">
             <div className="bg-white p-6 rounded shadow-sm">
                <h3 className="text-lg font-bold mb-6 border-b border-stone-100 pb-2">갤러리 목록 ({images.length})</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((img) => (
                    <div key={img.id} className="relative group border border-stone-200 rounded overflow-hidden">
                      <div className="aspect-square bg-stone-100">
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-3">
                        <span className="text-xs font-bold text-blue-600 block mb-1">{img.category}</span>
                        <p className="text-xs text-stone-500 truncate">{img.alt}</p>
                      </div>
                      
                      <button 
                        onClick={() => handleDeleteImage(img.id)}
                        className="absolute top-2 right-2 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;