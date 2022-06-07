// create password characters array using .fromCharCode - UTF-16
const passwordChars = generateCharArray()

function generateCharArray() {
    let charArray = [];
    
    for (let i=33; i<127; i++) {
        charArray.push(String.fromCharCode(i));
    }
    
    return charArray;
}

// create character array
generateCharArray();

// generate random number taking into account length of passwordChars
function randomNumber() {
    let arrayLength = passwordChars.length;
    let randomIndex = Math.floor(Math.random()*arrayLength);
    return randomIndex;
}

// create 4 passwords and push to generatedPasswords array
function generatePasswords() {
    // hold 4 passwords in array
    let passwords = [];
    
    let select = document.getElementById("password-length");
    let value = select.options[select.selectedIndex].value;
    
    for (let i=0; i<4; i++) {
        let password = "";
        
        for (let j=0; j<value; j++) {
            password += passwordChars[randomNumber()];
        }
        
        passwords.push(password);
    }
    return passwords;
}

function replacePasswords() {
    let passwords = generatePasswords();
    document.getElementById("password-one").value = passwords[0];
    document.getElementById("password-two").value = passwords[1];
    document.getElementById("password-three").value = passwords[2];
    document.getElementById("password-four").value = passwords[3];
}

function copyToClipboard(copyId) {
  const copyText = document.getElementById(copyId).value;
  navigator.clipboard.writeText(copyText).then(() => {
    alert("Copied to clipboard");
  });
}