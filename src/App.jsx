import { useState, useRef } from 'react';

// ============================================
// CONFIGURATION - Add your API key here
// Get a free key at: https://dashboard.apiverve.com
// ============================================
const API_KEY = 'your-api-key-here';
const API_URL = 'https://api.apiverve.com/v1/imagecaption';

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be less than 5MB');
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setCaption('');
    setError('');
  };

  // Handle drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const input = fileInputRef.current;
      const dt = new DataTransfer();
      dt.items.add(file);
      input.files = dt.files;
      handleFileChange({ target: { files: [file] } });
    }
  };

  // Generate caption
  const generateCaption = async () => {
    if (!image) return;

    if (API_KEY === 'your-api-key-here') {
      setError('Please add your API key to src/App.jsx');
      return;
    }

    setLoading(true);
    setError('');
    setCaption('');

    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'x-api-key': API_KEY
        },
        body: formData
      });

      const data = await response.json();

      if (data.status === 'ok' && data.data) {
        const newCaption = data.data.caption || data.data.text || 'No caption generated';
        setCaption(newCaption);

        // Add to history
        setHistory(prev => [{
          id: Date.now(),
          imageUrl: preview,
          caption: newCaption
        }, ...prev.slice(0, 9)]);
      } else {
        setError(data.error || 'Failed to generate caption');
      }
    } catch (err) {
      setError('API request failed. Check your API key.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Clear current image
  const clearImage = () => {
    setImage(null);
    setPreview(null);
    setCaption('');
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Copy caption to clipboard
  const copyCaption = () => {
    navigator.clipboard.writeText(caption);
  };

  return (
    <div className="app">
      <header>
        <h1>AI Image Caption</h1>
        <p className="subtitle">Generate intelligent captions for any image</p>
      </header>

      <main>
        {/* Upload Section */}
        <section className="upload-section">
          {!preview ? (
            <div
              className="upload-area"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="upload-icon">🖼️</div>
              <p>Drop an image here or <span className="link">browse</span></p>
              <span className="hint">Supports JPG, PNG, GIF (max 5MB)</span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                hidden
              />
            </div>
          ) : (
            <div className="preview-container">
              <img src={preview} alt="Preview" className="preview-image" />
              <button className="clear-btn" onClick={clearImage}>×</button>
            </div>
          )}
        </section>

        {/* Generate Button */}
        <button
          className="generate-btn"
          onClick={generateCaption}
          disabled={!image || loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Analyzing Image...
            </>
          ) : (
            <>✨ Generate Caption</>
          )}
        </button>

        {/* Error Display */}
        {error && <div className="error">{error}</div>}

        {/* Caption Result */}
        {caption && (
          <div className="result">
            <div className="result-header">
              <h3>Generated Caption</h3>
              <button className="copy-btn" onClick={copyCaption}>
                Copy
              </button>
            </div>
            <p className="caption-text">{caption}</p>
          </div>
        )}

        {/* History Section */}
        {history.length > 0 && (
          <section className="history-section">
            <h2>Recent Captions</h2>
            <div className="history-grid">
              {history.map(item => (
                <div key={item.id} className="history-item">
                  <img src={item.imageUrl} alt="History" />
                  <p>{item.caption}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer>
        <p>
          Powered by{' '}
          <a
            href="https://apiverve.com/marketplace/imagecaption?utm_source=github&utm_medium=tutorial&utm_campaign=image-caption-react-tutorial"
            target="_blank"
            rel="noopener noreferrer"
          >
            APIVerve Image Caption API
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
