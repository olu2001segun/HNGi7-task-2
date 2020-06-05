# HNGi7-task-2

HNGi7 Task 2 (By: Team-Fierce)
<<<<<<< HEAD

<h2>HOW TO ADD YOUR SCRIPTS TO THIS REPO</h2>
<ol>
  <li>Fork this repository</li> <br>
  <li>Clone the forked repo to your computer</li> <br>
  <li>Add your script to the scripts folder (Please follow the naming convention earlier stated - {username-HNG-ID.ext” ---- ( where “.ext” is your file extension .js/.py/.php )
So for example, mine will be tomiwaajayi-HNG-00020.js / tomiwaajayi-HNG-00020.php / tomiwaajayi-HNG-00020.py, all depending on my script extension}</li> <br>
  <li>After you have added your script file to the scripts folder, run the following in gitbash or teminal
    <ul>
      <li>git checkout -b HNG-ID (e.g <code>git checkout -b HNG-00020</code>)</li> 
      <li><code>git add .</code></li>
      <li>git commit -m "username-HNG-ID script" (e.g <code>git commit -m "tomiwaajayi-HNG-00020 script"</code>)</li>
      <li>git push origin HNG-ID (e.g <code>git push origin HNG-00020)</code></li>
    </ul></li> <br>
  <li>Create a pull request straight to this repository <br> NB: In your forked repo, don't merge your newly created branch into develop i.e you will be creating a PR with your new branch (which contains your script) ahead of your develop branch</li>
</ol>

### Languages Supported

- Python (3.x)
- Javascript (Node)
- PHP

### JSON Response

Implementation for unsupported and supported languages was catered for and can be accessed with

- valid
- invalid

Indexing the valid key gives an array of all supported langugaes that has gone through processing and
Indexing the invalid part of the json gives an array of all unsupported languages

sample json output

```
{
  "valid": [{
    "output": "Hello World, this is Don Joe with HNGi7 ID HNG-xxxx using JavaScript for stage 2 task",
    "name": "Don Joe",
    "id": "HNG-xxxx",
    "email": "don.joe@example.com",
    "language": "Javascript",
    "status": "pass",
  },
  {
    "output": "Hello World, thisis Mary Joe with HNGi7 ID HNG-yyyy using PHP for stage 2 task",
    "name": "Mary Joe",
    "id": "HNG-yyyy",
    "email": "mary.joe@example.com",
    "language": "PHP",
    "status": "fail",
  },
  .
  .
  .],
  "invalid": [{
    "output": "Files with .cpp extension are not supported!",
    "name": "null",
    "file": "intern.cpp"
    "id": "null",
    "email": "null",
    "language": "null",
    "status": "fail",
  }]
}
```
=======
>>>>>>> master
