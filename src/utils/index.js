exports.generateHtml5Page = (props) => {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${props.title}</title>
      </head>
      <body>
        <div id='app'>
          <div class='lds-container'>
          <style>
            .lds-roller {
              display: inline-block;
              position: relative;
              width: 64px;
              height: 64px;
            }
            .lds-roller div {
              animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
              transform-origin: 32px 32px;
            }
            .lds-roller div:after {
              content: " ";
              display: block;
              position: absolute;
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #fff;
              margin: -3px 0 0 -3px;
            }
            .lds-roller div:nth-child(1) {
              animation-delay: -0.036s;
            }
            .lds-roller div:nth-child(1):after {
              top: 50px;
              left: 50px;
            }
            .lds-roller div:nth-child(2) {
              animation-delay: -0.072s;
            }
            .lds-roller div:nth-child(2):after {
              top: 54px;
              left: 45px;
            }
            .lds-roller div:nth-child(3) {
              animation-delay: -0.108s;
            }
            .lds-roller div:nth-child(3):after {
              top: 57px;
              left: 39px;
            }
            .lds-roller div:nth-child(4) {
              animation-delay: -0.144s;
            }
            .lds-roller div:nth-child(4):after {
              top: 58px;
              left: 32px;
            }
            .lds-roller div:nth-child(5) {
              animation-delay: -0.18s;
            }
            .lds-roller div:nth-child(5):after {
              top: 57px;
              left: 25px;
            }
            .lds-roller div:nth-child(6) {
              animation-delay: -0.216s;
            }
            .lds-roller div:nth-child(6):after {
              top: 54px;
              left: 19px;
            }
            .lds-roller div:nth-child(7) {
              animation-delay: -0.252s;
            }
            .lds-roller div:nth-child(7):after {
              top: 50px;
              left: 14px;
            }
            .lds-roller div:nth-child(8) {
              animation-delay: -0.288s;
            }
            .lds-roller div:nth-child(8):after {
              top: 45px;
              left: 10px;
            }
            @keyframes lds-roller {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }

            .lds-overlay {
              position: fixed;
              margin: -10px;
              padding: -10px;
              width: 150%;
              height: 150%;
              background: rgba(0,0,0,0.4);
            }

            .lds-flex {
              position: fixed;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
            }

            .lds-flex-center {
              max-width: 50%;
              flex: 1;
            }


          </style>
            <div class='lds-overlay'></div>
            <div class='lds-flex'>
              <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
        </div>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <script>
          (function() {
            var removeLoader = function () {
              var loader = document.querySelector('.lds-container');

              if(loader) {
                loader.remove();
              }
            };

            var displayError = function () {
              var div = document.createElement('div');
              div.innerHTML = "There was an error loading the app";
              document.body.appendChild(div);
            };

            var script = document.createElement('script');
            script.src = '${props.scriptUrl}';
            script.defer = true;
            script.onload = function() {
              removeLoader();
            };

            script.onerror = function() {
              removeLoader();
              displayError();
            }

            document.body.appendChild(script);
          })();
        </script>
      </body>
    </html>
    `;
}
