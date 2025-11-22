function addFooter()
{
    // Find footer div and add the top button and icon svgs
    let footerDiv = document.getElementById("footerBox");
    footerDiv.innerHTML +=`
    <h2 style="margin: auto;">
        <a href="#" style="text-decoration: none;color:inherit;opacity:50%;"><em>To The Top</em></a>
    </h2>
    <div style="margin-top: 12px;">
        <a href="https://www.youtube.com/@Aerotusk" style="text-decoration: none;">
            <svg class="icon" width="29" height="20" xmlns="http://www.w3.org/2000/svg" alt="Aerotusk - YouTube" title="Aerotusk - YouTube">
                <path d="
                M27.9727 3.12324
                C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366
                C23.2197 2.24288e-07 14.285 0 14.285 0
                C14.285 0 5.35042 2.24288e-07 3.12323 0.597366
                C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324
                C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768
                C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026
                C5.35042 20 14.285 20 14.285 20
                C14.285 20 23.2197 20 25.4468 19.4026
                C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768
                C28.5701 14.6496 28.5701 10 28.5701 10
                C28.5701 10 28.5677 5.35042 27.9727 3.12324
                Z 
                
                M18.8477 10.0004 
                L11.4253 14.2854 
                V14.2854
                L11.4253 5.71533 
                Z">
            </svg>
        </a>
        <a href="https://www.twitch.tv/aerotusk" style="text-decoration: none;">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2400 2800" style="enable-background:new 0 0 2400 2800;" xml:space="preserve" alt="Aerotusk - Twitch" title="Aerotusk - Twitch">
                <path d="M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600V1300z"/>
                <rect x="1700" y="550" width="200" height="600"/>
                <rect x="1150" y="550" width="200" height="600"/>
            </svg>
        </a>
        <a href="https://www.instagram.com/aerotusk_/" style="text-decoration: none;">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" alt="Aerotusk - Instagram" title="Aerotusk - Instagram">
                <path
                    d="
                    M 3,0.5 
                    A 2.5,2.5 0,0,0 0.5,3
                    V 7 
                    A 2.5,2.5 0,0,0 3,9.5
                    H 7 
                    A 2.5,2.5 0,0,0 9.5,7
                    V 3 
                    A 2.5,2.5 0,0,0 7,0.5
                    Z 
                    m 0,1 
                    H 7 
                    A 1.5,1.5 0,0,1 8.5,3
                    V 7 
                    A 1.5,1.5 0,0,1 7,8.5
                    H 3 
                    A 1.5,1.5 0,0,1 1.5,7
                    V 3 
                    A 1.5,1.5 0,0,1 3,1.5
                    Z" />
                <path
                    d="
                    M 5,2.5
                    a 2.5,2.5 0,1,0 0,5
                    a 2.5,2.5 0,1,0 0,-5
                    M 5,3.5
                    a 1.5,1.5 0,1,1 0,3
                    a 1.5,1.5 0,1,1 0,-3
                    Z
                    "/>
                <circle
                    cx="7.4"
                    cy="2.6"
                    r="0.55" />
            </svg>
        </a>;
    </div>
    `
}

addFooter();