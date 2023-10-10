<h1 align="center">Online Code Compiler Using API</h1>

<p align="center">This is an online text editor, that runs code in <code>Java</code> , <code>Python</code> and <code>C/C++</code>.</p>
<br/>

<h3 align="center">How To Use</h3>
Copy and Paste Your API key into api_key variable declared inside script.js file.
<br/><br/>

<h3 align="center">How to get an API Key</h3>

- Log in or sign up for your RapidAPI account.
- Navigate to any API documentation page by searching for or clicking on one of the collections from the homepage.
- Scroll down to the "Header Parameters" section of the API console.
- Your API Key should be visible in the "X-RapidAPI-Key" field.

<br/>

<h3 align="center">Use of API (Provided by Rapid's API Platform)</h3>

-   Header Parameters
    <table>
      <tr>
        <th>x-compile</th>
        <td>rapidapi</td>
      </tr>
      <tr>
        <th>Content-Type</th>
        <td>application/json</td>
      </tr>
      <tr>
        <th>X-RapidAPI-Key</th>
        <td>"Your API Key"</td>
      </tr>
      <tr>
        <th>X-RapidAPI-Host</th>
        <td>code-compiler10.p.rapidapi.com</td>
      </tr>
    </table>
-   Request Body
    <div style="width:500px;height:200px;background-color:grey">
      <pre>
      {
         "lang": "Your Selected Language from Dropdown",
         "code": "Your Entered Code in Editor"
      }
      </pre>
    </div>
<br/>



<h3 align="center">Languages Used</h3>

- HTML
- CSS
- Javascript
