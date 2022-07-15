let posts = [
    {
        userImg: '<img src="src/img/profil.jpg" alt="">',
        author: 'Ishak',
        image: '<img src="src/img/post1.jpg" alt="">', 
        comments: ['1Text von Lorem Ipsum 124', 'Wo bist du?', 'Wie läufts...'],
        location: 'Turkey',
    },
    {
        userImg: '<img src="src/img/pexels-alex-fu-945966.jpg" alt="">',
        author: 'Dreamworld',
        image: '<img src="src/img/spruch.jpg" alt="">',
        description: 'Lebe deinen Traum Ipsum',
        comments: ['ksafdskj', 'salk'],
        location: 'Germany',
    },
    {
        userImg: '<img src="src/img/profil.jpg" alt="">',
        author: 'Ishak',
        image: '<img src="src/img/post2.jpg" alt="">',
        comments: ['Erster Text von Lorem Ipsum 124',],
        location: 'Turkey',
    },
    {
        userImg: '<img src="src/img/profil.jpg" alt="">',
        author: 'Ishak',
        image: '<img src="src/img/urlaub.jpg" alt="">',
        comments: ['First Text von Lorem Ipsum 124', 'Hotel Akrones'],
        location: 'Turkey',
    },
    {
        userImg: '<img src="src/img/pexels-josh-hild-4508669.jpg" alt="">',
        author: 'Georg',
        image: '<img src="src/img/katze.jpg" alt="">',
        comments: ['Baby Kätzchen sucht seinen Mami...', 'Und Ipsum ipsum?'],
        location: 'Germany',
    },
    {
        userImg: '<img src="src/img/pexels-alex-fu-945966.jpg" alt="">',
        author: 'Dreamworld',
        image: '<img src="src/img/spruch2.jpg" alt="">',
        comments: ['Lebe deinen Traum Ipsum', 'Motivation Ipsum', 'Danke Bro für die Motivation'],
        location: 'Germany',
    },
];

let contacts = [
    {name: 'Junus Ergin', image: '<img src="src/img/junus.jpg" alt="">', connect: 'Folgt dir'},
    {name: 'Manu Thaler', image: '<img src="src/img/manu.jpg" alt="">', connect: 'Folgt dir'},
    {name: 'Maria Musterfrau', image: '<img src="src/img/erika.png" alt="">', connect: '18 weitere Personen sind Follower'},
    {name: 'Barberking', image: '<img src="src/img/barber.png" alt="">', connect: '35 weitere Personen sind Follower'},
    {name: 'Timo12', image: '<img src="src/img/timo.jpg" alt="">', connect: '199 weitere Personen sind Follower'},
    {name: 'MihaiNeacsu', image: '<img src="src/img/mihai.jpg" alt="">', connect: 'Folgt dir'},
];

let follower = [
    {name: 'BikerBoy', image: '<img src="src/img/harley.jpg" alt="">',},
    {name: 'Mr.Johnson', image: '<img src="src/img/mrJohnson.jpg" alt="">',},
    {name: 'GeorgTraveler', image: '<img src="src/img/travel.jpg" alt="">',},
    {name: 'Barberking', image: '<img src="src/img/barber.png" alt="">',},
    {name: 'uncleJohn', image: '<img src="src/img/uncleJohn.jpg" alt="">',},
    {name: 'noMade', image: '<img src="src/img/NoMad.jpg" alt="">',},
    {name: 'WingMan', image: '<img src="src/img/wingMan.jpg" alt="">',},
    {name: 'Felix', image: '<img src="src/img/flower.jpg" alt="">',},
    {name: 'Dr.Sommer', image: '<img src="src/img/sommer.jpg" alt="">',},
    {name: 'MarkBergman', image: '<img src="src/img/mark.jpg" alt="">',},
    {name: 'TechnoNerd', image: '<img src="src/img/nerd.jpg" alt="">',},
    {name: 'Camper99', image: '<img src="src/img/camper.jpg" alt="">',},
    {name: 'BikerBoy', image: '<img src="src/img/harley.jpg" alt="">',},
    {name: 'Mr.Johnson', image: '<img src="src/img/mrJohnson.jpg" alt="">',},
    {name: 'GeorgTraveler', image: '<img src="src/img/travel.jpg" alt="">',},
    {name: 'Barberking', image: '<img src="src/img/barber.png" alt="">',},
    {name: 'uncleJohn', image: '<img src="src/img/uncleJohn.jpg" alt="">',},
    {name: 'noMade', image: '<img src="src/img/NoMad.jpg" alt="">',},
    {name: 'WingMan', image: '<img src="src/img/wingMan.jpg" alt="">',},
    {name: 'Felix', image: '<img src="src/img/flower.jpg" alt="">',},
    {name: 'Dr.Sommer', image: '<img src="src/img/sommer.jpg" alt="">',},
    {name: 'MarkBergman', image: '<img src="src/img/mark.jpg" alt="">',},
    {name: 'TechnoNerd', image: '<img src="src/img/nerd.jpg" alt="">',},
    {name: 'SenTiago', image: '<img src="src/img/camper.jpg" alt="">',},
];

function init() {
    renderFriendSuggestions();
    renderContent();
    renderFollowerContainer();
}



/**
 * FOLLOWER-CONTAINER
 */
 function renderFollowerContainer(){
    let followerContainer = document.getElementById('followContainer');
    followerContainer.innerHTML = '';
    for (let i = 0; i < follower.length; i++) {
        const element = follower[i];

        followerContainer.innerHTML += `
                <div class="followerContainer cursor" id="switcher">
                    <div class="followerImg">
                        ${element.image}
                    </div>
                    <span class="followerNames">${element.name}</span>
                </div>

        `;      
    }
}


/**
 * RECHTER CONTAINER // PROFIL INFO UND FREUNDSCHAFTSVORSCHLÄGE
 */
function renderFriendSuggestions(){
    let suggestionContainer = document.getElementById('friendshipContainer');
    suggestionContainer.innerHTML = '';
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];

        suggestionContainer.innerHTML += `
            <div class="friendsMainContainer">
                <div class="friendHelpContainer">
                    <div class="cursor">
                        ${contact.image}
                    </div>
                    <div class="friendsInfo">
                        <span class="cursor">${contact.name}</span>
                        <span class="middleFont">${contact.connect}</span>
                    </div>
                </div>
                <a class="cursor">Folgen</a>                        
            </div>
        `;  
    }
}



/**
 * HAUPTCONTAINER FÜR CHAT-INHALT / MAINCONTAINER FOR CONTENT
 */
function renderContent(){
    let content = document.getElementById('userContainer');
    content.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const card = posts[i];

        content.innerHTML += generatePostCardTemplate(i, card);
        // Kommentare Rendern
        let firstContent = document.getElementById(`chatSection${i}`);
        let cardContent = document.getElementById(`chatHistory${i}`);
        
        firstContent.innerHTML = `<div class="contentStyling"><b>${card.comments[0]}</b></div>`;

        for (let j = 1; j < card.comments.length; j++) {
            const singleComment = card.comments[j];   
            cardContent.innerHTML += `<div class="contentStyling">${singleComment}</div>`;
        }
        toggleComments(i);
    }
}

/**
 * Generate Post Card Container
 */
function generatePostCardTemplate(i, card){
    return`
    <div class="postContainer">
        <div class="userStyling paddingPostContainer">
            <div class="postUser cursor">
                ${card.userImg}
                <span class="user">${card.author}</span>
            </div>
            <img class="iconSizes cursor" src="src/img/dots.png" alt="">
        </div>
        <div class="imgPostContainer">
            ${card.image}
        </div>
        <div class="ChatMainContainer">
            <div id="chatSection${i}" class="chat paddingPostContainer">   
            </div>
            <div id="chatHistory${i}" class="chatHistoryStyle chat paddingPostContainer">
            </div>
            <span onclick="toggleComments(${i})" id="chatHistoryBtn${i}" class="paddingPostContainer middleFont cursor">Alle ${card.comments.length} Kommentare ansehen</span>
            <span class="location paddingPostContainer">Location: ${card.location}</span>
            <div class="chatInput paddingPostContainer">
                <input id="inputfield${i}" class="inputFieldStyle" placeholder="Kommentieren ..." type="text">
                <span class="cursor" onclick="newComment(${i})">Posten</span>
            </div>
        </div>
    </div>
    `;
}


// Neuen Kommentar Posten
function newComment(i){
    let inputValue = document.getElementById(`inputfield${i}`).value; 
    posts[i].comments.push(inputValue);
    inputValue = '';

    renderContent();
    toggleComments(i);
}


// Alle Kommentare Anzeigen
function toggleComments(i){
    let x = document.getElementById(`chatHistory${i}`);
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById(`chatHistoryBtn${i}`).innerHTML = '';
        document.getElementById(`chatHistoryBtn${i}`).innerHTML = 'Schließen';
        } else {
        x.style.display = "none";
        document.getElementById(`chatHistoryBtn${i}`).innerHTML = `Alle ${posts[i].comments.length} Kommentare ansehen`;
        }
}



let scrollOffset = 1;
const SCROLL_LIMIT = 72;

// function switchFollowerToLeft(){
//     document.getElementById('followContainer').style.transform = `translate(-${SCROLL_LIMIT * scrollOffset}px)`;
//     scrollOffset++;
//     // document.getElementById('followContainer').classList.add("switchStyle");
// }



function switchFollowerToLeft(){
    if (scrollOffset < (follower.length - 5)) {     
        
        document.getElementById('followContainer').style.transform = `translate(-${(SCROLL_LIMIT * scrollOffset)}px)`;
        scrollOffset++;
    } 
}



function switchFollowerToRight(){
    if (scrollOffset > 1) {

        scrollOffset--;
        document.getElementById('followContainer').style.transform = `translate(-${((SCROLL_LIMIT * scrollOffset) -SCROLL_LIMIT)}px)`;
    } 
}

