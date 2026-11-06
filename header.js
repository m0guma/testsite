// header.js
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=LINE+Seed+JP&display=swap" rel="stylesheet">
    
    
    <header class="custom-header">
        <!-- 左側：ロゴ -->
        <div class="logo">
          <a href="/index.html">Quest</a>
        </div>
        
        <!-- 右側：ナビメニュー ＆ 資料請求ボタン -->
        <div class="header-right">
          <nav class="nav-links">
            <a href="/index.html">ホーム</a>
            <a href="/newsroom.html">ニュース</a>
            <a href="/services.html">サービス</a>
            <a href="/contact.html">お問い合わせ</a>
          </nav>
          
          <!-- 一番右：資料請求ボタン -->
          <div class="header-btn-area">
            <span class="btn-caption">＼より便利に！／</span>
            <a href="/contact.html" class="cta-btn">ログイン</a>
          </div>
        </div>
      </header>

      <style>
        /* --------------------------------------------------
         * 1. ヘッダー全体のレイアウト と ガラスモーフィズム設定
         * -------------------------------------------------- */
        .custom-header {
          display: flex;
          justify-content: space-between; 
          align-items: center;            
          padding: 15px 40px;             
          box-sizing: border-box;
          width: 100%;
          
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;

          background: rgba(255, 255, 255, 0.12); 
          backdrop-filter: blur(16px);          
          -webkit-backdrop-filter: blur(16px);  
          
          border-bottom: 1px solid rgba(255, 255, 255, 0.2); 
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03); 
        }

        /* --------------------------------------------------
         * 2. 各パーツ（ロゴ・メニュー・ボタン）のスタイル
         * -------------------------------------------------- */
        
        .logo a {
          color: #044cff;                       
          font-size: 26px;
          font-weight: 800;                     
          text-decoration: none;
          letter-spacing: 0.5px;                
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 35px;                            
        }

        .nav-links {
          display: flex;
          gap: 24px;                            
        }

        .nav-links a {
          color: #044cff;                       
          text-decoration: none;                
          border-bottom: 1px solid #044cff;     
          padding-bottom: 3px;                  
          font-size: 15px;
          font-weight: 500;
          transition: opacity 0.2s ease;
        }
        
        .nav-links a:hover {
          opacity: 0.7;                         
        }

        /* ボタンエリア全体の設定 */
        .header-btn-area {
          display: flex;
          flex-direction: column; 
          align-items: center;    
          gap: 4px;               
          position: relative;
        }

        /* ボタンの上の文字（＼今すぐ資料請求／） */
        .btn-caption {
          color: #ff6f00;         
          font-size: 11px;        
          font-weight: bold;
          white-space: nowrap;    
          letter-spacing: 0.5px;
        }

        /* 🌟資料請求ボタン（シマシマ・ストライプ柄デザイン） */
        .cta-btn {
          display: inline-block;
          color: #ffffff;                       /* 文字色（白） */
          text-decoration: none;
          padding: 10px 24px;                   
          border-radius: 25px;                  
          font-size: 14px;
          font-weight: 700;                     
          box-shadow: 0 4px 15px rgba(0, 76, 255, 0.3); /* ほんのり青い影 */
          transition: all 0.2s ease;

          /* 🎨 45度の角度で濃い青(#004cff)と、少し薄い青(#3370ff)のシマシマを描く */
          background-image: repeating-linear-gradient(
            45deg,
            #004cff,
            #004cff 8px,
            #3370ff 8px,
            #3370ff 16px
          );
        }
        
        /* 🌟資料請求ボタンにマウスを乗せたとき */
        .cta-btn:hover {
          transform: translateY(-1px);          
          box-shadow: 0 6px 20px rgba(0, 76, 255, 0.45); 
          
          /* ホバー時はシマシマ全体を少し明るいトーンに変更 */
          background-image: repeating-linear-gradient(
            45deg,
            #1a62ff,
            #1a62ff 8px,
            #4d82ff 8px,
            #4d82ff 16px
          );
        }
      </style>
    `;
  }
}

customElements.define('my-header', MyHeader);