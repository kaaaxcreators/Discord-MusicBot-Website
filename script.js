const replitButton = document.getElementById('replitBtn');
const cloneButton = document.getElementById('cloneBtn');
const envButton = document.getElementById('envBtn');
const startButton = document.getElementById('startBtn');
const urlInput = document.getElementById('replitInput');
const cronsignupButton = document.getElementById('CronSignupBtn');
const CronCreateButton = document.getElementById('CronCreateBtn');
const title = document.querySelector('.title');
const spinning = document.getElementById('spinning');
const envtut = document.getElementById('envtut');

const replitSignup = () => {
    replitButton.disabled = true;
    window.open('https://repl.it/signup', '_blank');
    cloneButton.disabled = false;
};

const cloneMusicbot = () => {
    cloneButton.disabled = true;
    window.open('https://repl.it/github/kaaaxcreators/Discord-MusicBot', '_blank');
    envButton.disabled = false;
};

const replitEnv = () => {
    envButton.disabled = true;
    const TOKEN = window.prompt("Discord Bot Token");
    const PREFIX = window.prompt("The Prefix you want");
    const SOUNDCLOUD_CLIENT_ID = window.prompt("SoundCloud Client ID. Leave as is for default", "2t9loNQH90kzJcsFCODdigxfp325aq4z");
    const PRESENCE = window.prompt("Bot Activity Text");
    const textarea = document.createElement('textarea');
    textarea.textContent = JSON.stringify({TOKEN, PREFIX, SOUNDCLOUD_CLIENT_ID, PRESENCE});
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        alert('Failed copying device auth to the clipboard!');
    }
    document.body.removeChild(textarea);
    envButton.innerHTML = "<p>Successfully copied to clipboard!</p>";
    envtut.style.display = "block"  
    startButton.disabled = false;
};

const startReplit = () => {
    startButton.disabled = true;
    envtut.style.display = "none";
    alert('Go back to your repl.it, click start & then copy the url');
    cronsignupButton.disabled = false;
};

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