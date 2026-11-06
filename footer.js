// footer.js （エラー修正版・完全版）
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- アイコンフォント（Font Awesome）の読み込み -->
      <link rel="stylesheet" href="https://cloudflare.com">

      <footer class="custom-footer">
        <!-- 左側：SNSアイコングループ -->
        <div class="footer-left">
          <div class="sns-icons">
            <a href="https://x.com" target="_blank" aria-label="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
          <!-- コピーライト（著作権表記） -->
          <p class="copyright">&copy; 2026 Quest. All rights reserved.</p>
        </div>

        <!-- 右側：ロゴ -->
        <div class="footer-right">
          <div class="footer-logo">
            <a href="/index.html">Quest</a>
          </div>
        </div>
      </footer>

      <style>
               /* --------------------------------------------------
         * 1. フッター全体のレイアウト と ガラスモーフィズム設定
         * -------------------------------------------------- */
        .custom-footer {
          display: flex;
          justify-content: space-between; 
          align-items: center;            
          padding: 40px 40px;             
          box-sizing: border-box;
          width: 100%;
          
          /* 📌 画面固定を解除し、自然な位置に配置します */
          position: relative; 
          margin-top: auto; /* 👈これが重要！親要素の力で一番下に押し出されます */
          
          font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;

          background: rgba(167, 167, 167, 0.99); 
          backdrop-filter: blur(16px);          
          -webkit-backdrop-filter: blur(16px);  
          
          border-top: 1px solid rgba(255, 255, 255, 0.15); 
        }



        /* --------------------------------------------------
         * 2. 各パーツ（SNS・コピーライト・ロゴ）のスタイル
         * -------------------------------------------------- */
        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .sns-icons {
          display: flex;
          gap: 20px;
        }
        
        .sns-icons a {
          color: #044cff;                       
          font-size: 20px;                      
          text-decoration: none;
          transition: transform 0.2s, color 0.2s;
        }
        
        .sns-icons a:hover {
          color: #004cff;
          transform: translateY(-2px);          
        }

        .copyright {
          color: rgba(255, 255, 255, 0.5);     
          font-size: 12px;
          margin: 0;
        }

        .footer-logo a {
          color: #044cff;                       
          font-size: 26px;
          font-weight: 800;                     
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: opacity 0.2s;
        }
        
        .footer-logo a:hover {
          opacity: 0.7;
        }
      </style>
    `;
  }
}

customElements.define('my-footer', MyFooter);