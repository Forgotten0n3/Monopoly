// script.js

// กำหนดข้อมูลกระดานเกม
const spaces = [
    { name: "GO", type: "go" },
    { name: "Xi'an", type: "property", color: "brown", price: 60, rent: [2,10,30,90,160,250], group: "brown", houseCost: 50 },
    { name: "Community Chest", type: "community" },
    { name: "Chengdu", type: "property", color: "brown", price: 60, rent: [4,20,60,180,320,450], group: "brown", houseCost: 50 },
    { name: "Income Tax", type: "tax", amount: 200 },
    { name: "North Railway", type: "railroad", price: 200, group: "railroad" },
    { name: "Shanghai", type: "property", color: "lightblue", price: 100, rent: [6,30,90,270,400,550], group: "lightblue", houseCost: 50 },
    { name: "ของพิเศษ", type: "chance" },
    { name: "Tianjin", type: "property", color: "lightblue", price: 100, rent: [6,30,90,270,400,550], group: "lightblue", houseCost: 50 },
    { name: "Chongqing", type: "property", color: "lightblue", price: 120, rent: [8,40,100,300,450,600], group: "lightblue", houseCost: 50 },
    { name: "Jail", type: "jail" },
    { name: "Guangzhou", type: "property", color: "pink", price: 140, rent: [10,50,150,450,625,750], group: "pink", houseCost: 100 },
    { name: "Electric Company", type: "utility", price: 150, group: "utility" },
    { name: "Wuhan", type: "property", color: "pink", price: 140, rent: [10,50,150,450,625,750], group: "pink", houseCost: 100 },
    { name: "Harbin", type: "property", color: "pink", price: 160, rent: [12,60,180,500,700,900], group: "pink", houseCost: 100 },
    { name: "East Railway", type: "railroad", price: 200, group: "railroad" },
    { name: "Dalian", type: "property", color: "orange", price: 180, rent: [14,70,200,550,750,950], group: "orange", houseCost: 100 },
    { name: "Community Chest", type: "community" },
    { name: "Qingdao", type: "property", color: "orange", price: 180, rent: [14,70,200,550,750,950], group: "orange", houseCost: 100 },
    { name: "Nanjing", type: "property", color: "orange", price: 200, rent: [16,80,220,600,800,1000], group: "orange", houseCost: 100 },
    { name: "Free Parking", type: "free" },
    { name: "Hangzhou", type: "property", color: "red", price: 220, rent: [18,90,250,700,875,1050], group: "red", houseCost: 150 },
    { name: "ของพิเศษ", type: "chance" },
    { name: "Xiamen", type: "property", color: "red", price: 220, rent: [18,90,250,700,875,1050], group: "red", houseCost: 150 },
    { name: "Jinan", type: "property", color: "red", price: 240, rent: [20,100,300,750,925,1100], group: "red", houseCost: 150 },
    { name: "South Railway", type: "railroad", price: 200, group: "railroad" },
    { name: "Changsha", type: "property", color: "yellow", price: 260, rent: [22,110,330,800,975,1150], group: "yellow", houseCost: 150 },
    { name: "Ningbo", type: "property", color: "yellow", price: 260, rent: [22,110,330,800,975,1150], group: "yellow", houseCost: 150 },
    { name: "Water Works", type: "utility", price: 150, group: "utility" },
    { name: "Wuxi", type: "property", color: "yellow", price: 280, rent: [24,120,360,850,1025,1200], group: "yellow", houseCost: 150 },
    { name: "Go to Jail", type: "goToJail" },
    { name: "Suzhou", type: "property", color: "green", price: 300, rent: [26,130,390,900,1100,1275], group: "green", houseCost: 200 },
    { name: "Foshan", type: "property", color: "green", price: 300, rent: [26,130,390,900,1100,1275], group: "green", houseCost: 200 },
    { name: "Community Chest", type: "community" },
    { name: "Dongguan", type: "property", color: "green", price: 320, rent: [28,150,450,1000,1200,1400], group: "green", houseCost: 200 },
    { name: "West Railway", type: "railroad", price: 200, group: "railroad" },
    { name: "ของพิเศษ", type: "chance" },
    { name: "Beijing", type: "property", color: "darkblue", price: 350, rent: [35,175,500,1100,1300,1500], group: "darkblue", houseCost: 200 },
    { name: "Luxury Tax", type: "tax", amount: 100 },
    { name: "Shenzhen", type: "property", color: "darkblue", price: 400, rent: [50,200,600,1400,1700,2000], group: "darkblue", houseCost: 200 },
];

// ระบบของพิเศษ (คำศัพท์จีน)
const specialItems = [
    { chinese: "钥匙 (yàoshi)", thai: "กุญแจ", effect: "Get out of jail free", action: 'getOutCard' },
    { chinese: "涂改液 (túgǎiyè)", thai: "น้ำยาลบคำผิด", effect: "Bank error in your favor, get $50", action: 'get50' },
    { chinese: "钢笔 (gāngbǐ)", thai: "ปากกาหมึกซึม", effect: "Advance to Go", action: 'goTo0' },
    { chinese: "眼镜 (yǎnjìng)", thai: "แว่นตา", effect: "Go to jail", action: 'goJail' },
    { chinese: "笔袋 (bǐdài)", thai: "กระเป๋าดินสอ", effect: "Pay school fees $50", action: 'pay50' },
    { chinese: "雨伞 (yǔsǎn)", thai: "ร่ม", effect: "Get $100", action: 'get100' },
    { chinese: "钱包 (qiánbāo)", thai: "กระเป๋าสตางค์", effect: "Pay $100", action: 'pay100' },
    { chinese: "笔记本 (bǐjìběn)", thai: "สมุดบันทึก", effect: "Move back 3 spaces", action: 'moveBack3' },
    { chinese: "尺子 (chǐzi)", thai: "ไม้บรรทัด", effect: "Get $25", action: 'get25' },
    { chinese: "零食 (língshí)", thai: "ขนมขบเคี้ยว", effect: "Pay each player $10", action: 'payEach10' },
];

// ใช้เดียวกันสำหรับ community เพื่อความง่าย
const chanceCards = specialItems;
const communityCards = specialItems;

// Token icons สำหรับผู้เล่น (ธีมจีน)
const tokens = ['🐉', '🏮', '🀄', '🎆'];

// ฟังก์ชันคำนวณตำแหน่ง grid
function getGridPosition(index) {
    if (index <= 10) {
        return { row: 11, column: 11 - index };
    } else if (index <= 20) {
        return { row: 11 - (index - 10), column: 1 };
    } else if (index <= 30) {
        return { row: 1, column: index - 20 + 1 };
    } else {
        return { row: index - 30 + 1, column: 11 };
    }
}

// ตัวแปรเกม
let players = [];
let currentPlayer = 0;
let doubleCount = 0;
let lastRollSum = 0;

// DOM elements
const board = document.getElementById('board');
const status = document.getElementById('status');
const rollBtn = document.getElementById('roll-dice');
const buyBtn = document.getElementById('buy-property');
const buildBtn = document.getElementById('build-house');
const endBtn = document.getElementById('end-turn');
const startBtn = document.getElementById('start-game');
const playersInfo = document.getElementById('players-info');
const showSpecialBtn = document.getElementById('show-special');

// สร้างกระดาน
function initBoard() {
    for (let i = 0; i < spaces.length; i++) {
        const pos = getGridPosition(i);
        const div = document.createElement('div');
        div.classList.add('space');
        div.style.gridRow = pos.row;
        div.style.gridColumn = pos.column;
        if (spaces[i].color) {
            const bar = document.createElement('div');
            bar.classList.add('color-bar');
            bar.style.backgroundColor = spaces[i].color;
            div.appendChild(bar);
        }
        const name = document.createElement('div');
        name.classList.add('name');
        name.textContent = spaces[i].name;
        div.appendChild(name);
        if (spaces[i].price) {
            const price = document.createElement('div');
            price.classList.add('price');
            price.textContent = '$' + spaces[i].price;
            div.appendChild(price);
        }
        board.appendChild(div);
    }
}

// อัพเดทข้อมูลผู้เล่น
function updatePlayersInfo() {
    playersInfo.innerHTML = '';
    players.forEach((p, index) => {
        const div = document.createElement('div');
        div.classList.add('player-panel');
        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>เงิน: $${p.money}</p>
            <p>ทรัพย์สิน:</p>
            <ul>${p.properties.map(prop => `<li>${prop.name} (${prop.houses} บ้าน)</li>`).join('')}</ul>
        `;
        if (currentPlayer === index) div.style.border = '2px solid gold';
        playersInfo.appendChild(div);
    });
}

// อัพเดทตำแหน่ง token
function updateTokens() {
    players.forEach((p, index) => {
        const tokenId = 'token' + (index + 1);
        let token = document.getElementById(tokenId);
        if (!token) {
            token = document.createElement('div');
            token.id = tokenId;
            token.classList.add('token', 'token' + (index + 1));
            token.innerHTML = p.token;
            board.appendChild(token);
        }
        const pos = getGridPosition(p.position);
        token.style.gridRow = pos.row;
        token.style.gridColumn = pos.column;
    });
}

// เช็ค monopoly
function checkMonopoly(group, owner) {
    const groupProps = spaces.filter(s => s.group === group && s.type === 'property');
    return groupProps.every(s => s.owner === owner);
}

// คำนวณค่าเช่า
function calculateRent(s) {
    const owner = s.owner;
    if (s.type === 'property') {
        if (s.houses > 0) return s.rent[s.houses];
        const hasMonopoly = checkMonopoly(s.group, owner);
        return s.rent[0] * (hasMonopoly ? 2 : 1);
    } else if (s.type === 'railroad') {
        const owned = owner.properties.filter(prop => prop.type === 'railroad').length;
        return 25 * Math.pow(2, owned - 1);
    } else if (s.type === 'utility') {
        const owned = owner.properties.filter(prop => prop.type === 'utility').length;
        return (owned === 2 ? 10 : 4) * lastRollSum;
    }
    return 0;
}

// จ่ายเงิน
function pay(amount) {
    players[currentPlayer].money -= amount;
    checkBankrupt();
}

// จ่ายค่าเช่า
function payRent(amount, owner) {
    const p = players[currentPlayer];
    p.money -= amount;
    owner.money += amount;
    status.textContent += ` - จ่ายค่าเช่า $${amount} ให้ ${owner.name}`;
    checkBankrupt();
}

// เช็ค bankrupt
function checkBankrupt() {
    const p = players[currentPlayer];
    if (p.money < 0) {
        p.isBankrupt = true;
        status.textContent += ' - ล้มละลาย!';
        p.properties.forEach(prop => {
            prop.owner = null;
            prop.houses = 0;
        });
        p.properties = [];
        updatePlayersInfo();
    }
    const activePlayers = players.filter(pl => !pl.isBankrupt);
    if (activePlayers.length === 1) {
        status.textContent = `${activePlayers[0].name} ชนะ!`;
        rollBtn.disabled = true;
        buyBtn.disabled = true;
        buildBtn.disabled = true;
        endBtn.disabled = true;
        startBtn.disabled = false;
    }
}

// เคลื่อนที่ผู้เล่น
function movePlayer(sum) {
    const p = players[currentPlayer];
    p.position += sum;
    if (p.position >= 40) {
        p.position %= 40;
        p.money += 200;
        status.textContent += ' - ผ่าน GO รับ $200';
    }
    updateTokens();
    landOnSpace();
}

// ไปคุก
function goToJail() {
    const p = players[currentPlayer];
    p.position = 10;
    p.inJail = true;
    p.jailTurns = 0;
    doubleCount = 0;
    status.textContent += ' - ไปคุก!';
    updateTokens();
    rollBtn.disabled = true;
    endBtn.disabled = false;
}

// ตกช่อง
function landOnSpace() {
    const p = players[currentPlayer];
    const s = spaces[p.position];
    status.textContent += ` - ตกช่อง ${s.name}`;
    buyBtn.disabled = true;
    buildBtn.disabled = true;
    if (s.type === 'property' || s.type === 'railroad' || s.type === 'utility') {
        if (s.owner === null) {
            buyBtn.disabled = p.money < s.price;
            endBtn.disabled = false;
        } else if (s.owner !== p) {
            const rent = calculateRent(s);
            payRent(rent, s.owner);
            endTurn();
            return;
        } else {
            // เป็นเจ้าของ ตรวจสอบสร้างบ้าน
            if (s.type === 'property' && checkMonopoly(s.group, p) && s.houses < 5 && p.money >= s.houseCost) {
                buildBtn.disabled = false;
            }
            endTurn();
            return;
        }
    } else if (s.type === 'tax') {
        pay(s.amount);
        endTurn();
        return;
    } else if (s.type === 'chance') {
        drawCard(chanceCards);
        endTurn();
        return;
    } else if (s.type === 'community') {
        drawCard(communityCards);
        endTurn();
        return;
    } else if (s.type === 'goToJail') {
        goToJail();
        return;
    } else {
        endTurn();
        return;
    }
}

// จบเทิร์น
function endTurn() {
    if (doubleCount > 0 && !players[currentPlayer].inJail) {
        rollBtn.disabled = false;
        endBtn.disabled = true;
    } else {
        rollBtn.disabled = true;
        endBtn.disabled = false;
    }
}

// สุ่มการ์ด
function drawCard(cards) {
    const card = cards[Math.floor(Math.random() * cards.length)];
    status.textContent += ` - ${card.chinese} (${card.thai}): ${card.effect}`;
    applyCardAction(card.action);
}

// ใช้เอฟเฟกต์การ์ด
function applyCardAction(action) {
    const p = players[currentPlayer];
    switch (action) {
        case 'getOutCard': p.getOutCards++; break;
        case 'get50': p.money += 50; break;
        case 'pay50': pay(50); break;
        case 'get100': p.money += 100; break;
        case 'pay100': pay(100); break;
        case 'get25': p.money += 25; break;
        case 'goTo0': p.position = 0; p.money += 200; updateTokens(); break;
        case 'goJail': goToJail(); break;
        case 'moveBack3': p.position -= 3; if (p.position < 0) p.position += 40; updateTokens(); landOnSpace(); break;
        case 'payEach10':
            players.forEach(other => {
                if (other !== p && !other.isBankrupt) {
                    other.money += 10;
                    p.money -= 10;
                }
            });
            break;
    }
    checkBankrupt();
    updatePlayersInfo();
}

// แสดง modal
showSpecialBtn.onclick = () => {
    const list = document.getElementById('special-list');
    list.innerHTML = specialItems.map(item => `<li>${item.chinese} - ${item.thai} - ${item.effect}</li>`).join('');
    document.getElementById('modal').style.display = 'flex';
};

window.closeModal = () => {
    document.getElementById('modal').style.display = 'none';
};

// Event listeners
startBtn.onclick = () => {
    players = [];
    const numPlayers = parseInt(prompt('จำนวนผู้เล่น (2-4)', '4')) || 4;
    for (let i = 1; i <= numPlayers; i++) {
        const name = prompt(`ชื่อผู้เล่น ${i}`, `Player ${i}`);
        players.push({
            name,
            money: 1500,
            position: 0,
            inJail: false,
            jailTurns: 0,
            getOutCards: 0,
            properties: [],
            isBankrupt: false,
            token: tokens[i - 1]
        });
    }
    currentPlayer = 0;
    doubleCount = 0;
    spaces.forEach(s => {
        if (s.type === 'property' || s.type === 'railroad' || s.type === 'utility') {
            s.owner = null;
            s.houses = 0;
        }
    });
    updateTokens();
    updatePlayersInfo();
    status.textContent = `${players[0].name}'s turn`;
    rollBtn.disabled = false;
    buyBtn.disabled = true;
    buildBtn.disabled = true;
    endBtn.disabled = true;
    startBtn.disabled = true;
};

rollBtn.onclick = () => {
    const p = players[currentPlayer];
    let useCard = false;
    let payOut = false;
    if (p.inJail) {
        if (p.getOutCards > 0 && confirm('ใช้การ์ดออกคุก?')) {
            p.getOutCards--;
            p.inJail = false;
            p.jailTurns = 0;
            useCard = true;
        } else if (confirm('จ่าย $50 เพื่อออกคุก?')) {
            pay(50);
            p.inJail = false;
            p.jailTurns = 0;
            payOut = true;
        }
    }
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    lastRollSum = die1 + die2;
    status.textContent = `${p.name} ทอยได้ ${die1} + ${die2} = ${lastRollSum}`;
    if (p.inJail && !useCard && !payOut) {
        if (die1 === die2) {
            p.inJail = false;
            p.jailTurns = 0;
            status.textContent += ' - ออกจากคุก!';
            movePlayer(lastRollSum);
        } else {
            p.jailTurns++;
            if (p.jailTurns === 3) {
                pay(50);
                p.inJail = false;
                p.jailTurns = 0;
                movePlayer(lastRollSum);
            } else {
                endTurn();
            }
        }
    } else {
        if (die1 === die2) {
            doubleCount++;
            if (doubleCount === 3) {
                goToJail();
                return;
            }
        } else {
            doubleCount = 0;
        }
        movePlayer(lastRollSum);
    }
    rollBtn.disabled = true;
};

buyBtn.onclick = () => {
    const p = players[currentPlayer];
    const s = spaces[p.position];
    if (s.owner === null && p.money >= s.price) {
        p.money -= s.price;
        s.owner = p;
        p.properties.push(s);
        status.textContent += ` - ซื้อ ${s.name}`;
        updatePlayersInfo();
    }
    buyBtn.disabled = true;
    endTurn();
};

buildBtn.onclick = () => {
    const p = players[currentPlayer];
    const s = spaces[p.position];
    if (s.owner === p && checkMonopoly(s.group, p) && s.houses < 5 && p.money >= s.houseCost) {
        p.money -= s.houseCost;
        s.houses++;
        status.textContent += ` - สร้างบ้านบน ${s.name}`;
        updatePlayersInfo();
    }
    buildBtn.disabled = true;
    endTurn();
};

endBtn.onclick = () => {
    buyBtn.disabled = true;
    buildBtn.disabled = true;
    endBtn.disabled = true;
    currentPlayer = (currentPlayer + 1) % players.length;
    while (players[currentPlayer].isBankrupt) {
        currentPlayer = (currentPlayer + 1) % players.length;
    }
    doubleCount = 0;
    status.textContent = `${players[currentPlayer].name}'s turn`;
    rollBtn.disabled = false;
    updatePlayersInfo();
};

// เริ่มต้น
initBoard();