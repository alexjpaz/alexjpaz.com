exports.generateHtml5Page = (props) => {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>${props.title}</title>
      </head>
      <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <script defer src='${props.scriptUrl}'/>
      </body>
    </html>
    `;
}
