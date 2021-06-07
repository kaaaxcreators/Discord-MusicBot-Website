const replitButton = document.getElementById('replitBtn');
const cloneButton = document.getElementById('cloneBtn');
const envButton = document.getElementById('envBtn');
const startButton = document.getElementById('startBtn');
const cronsignupButton = document.getElementById('CronSignupBtn');
const CronCreateButton = document.getElementById('CronCreateBtn');
const title = document.querySelector('.title');
const spinning = document.getElementById('spinning');
const envtut = document.getElementById('envtut');
const tokenBtn = document.getElementById('tokenBtn');
const secretBtn = document.getElementById('secretBtn');
const urlBtn = document.getElementById('urlBtn');

const replitSignup = () => {
    replitButton.disabled = true;
    window.open('https://repl.it/signup', '_blank');
    cloneButton.disabled = false;
};

const cloneMusicbot = () => {
    cloneButton.disabled = true;
    window.open('https://repl.it/github/kaaaxcreators/Discord-MusicBot', '_blank');
    tokenBtn.disabled = false;
};

const getToken = () => {
    tokenBtn.disabled = true;
    alert('Click\n1. Your Application\n2. Bot in the left sidebar\n3. Under "TOKEN" click "Copy"')
    window.open('https://discord.com/developers/applications', '_blank');
    secretBtn.disabled = false;
};

const getSecret = () => {
  secretBtn.disabled = true;
  alert('Click\n1. Your Application\n2. OAuth2 in the left sidebar\n3. Under "CLIENT SECRET" click "Copy"')
  window.open('https://discord.com/developers/applications', '_blank');
  envButton.disabled = false;
};

const replitEnv = () => {
    envButton.disabled = true;
    const TOKEN = window.prompt("Discord Bot Token\nYou copied it in the penultimate step");
    const PREFIX = window.prompt("The Prefix you want\n<prefix>help. Example: !help", "!");
    const PRESENCE = window.prompt("Bot Activity Text\nText underneath the Name of the Bot");
    const SECRET = window.prompt("Discord Bot Client Secret\nYou copied it in the previous step");
    copy(JSON.stringify({TOKEN, PREFIX, PRESENCE, SECRET}));
    envButton.innerHTML = "<p>Successfully copied to clipboard!</p>";
    envtut.style.display = "block"  
    startButton.disabled = false;
};

const startReplit = () => {
    startButton.disabled = true;
    envtut.style.display = "none";
    alert('Go back to your repl.it, click start & then copy the url');
    urlBtn.disabled = false;
};

const ReplitURL = () => {
    urlBtn.disabled = true;
    alert("Add the URL to the Environment Variables with key 'WEB' and the URL as the Content\nNow restart your Bot and everything should work!");
    cronsignupButton.disabled = false;
}

const cronSignup = async () => {
    cronsignupButton.disabled = true;
    window.open('https://cron-job.org/en/signup/', '_blank');
    CronCreateButton.disabled = false;
};

const cronCreate = async () => {
    CronCreateButton.disabled = true;
    alert(
`Title: anything
http:// => The Url you copied
Click "Create Cronjob"`
    );
    window.open('https://cron-job.org/en/members/jobs/add/', '_blank');
};

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }
  function copy(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

const debug = () => {
    Array.from(document.getElementsByClassName('btn shadow')).forEach((e) => {e.disabled = false;})
}