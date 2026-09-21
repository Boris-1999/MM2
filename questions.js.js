let questions = JSON.parse(localStorage.getItem('myth_q')) || [
    {
        text: "<strong>Q1.</strong><br><strong>A:</strong> If $y = (x + 2)(x^2 + 3)$, find $\\frac{dy}{dx}$ at $x = 1$.<br><strong>B:</strong> If $y = (x + 3)(x^2 + 2)$, find $\\frac{dy}{dx}$ at $x = 1$.",
        ans: "Q1A: 14, Q1B: 15",
        time: 45
    },
    {
        text: "<strong>Q2.</strong><br><strong>A:</strong> A shopkeeper buys an item for ₹800 and marks it up by $25\\%$. He then gives a $10\\%$ discount. What is his profit percentage?<br><strong>B:</strong> A person has ₹10,000. He spends $30\\%$ on rent, $20\\%$ of the remaining amount on food, and $25\\%$ of the remaining amount on travel. How much money is left?",
        ans: "Q2A: 12.5%, Q2B: ₹4,200",
        time: 45
    },
    {
        text: "<strong>Q3.</strong><br><strong>A:</strong> If $y = (x^2 + 1)^5$, find $\\frac{dy}{dx}$ at $x = 1$.<br><strong>B:</strong> Evaluate $\\int_{0}^{1} x e^{x^2} dx$.",
        ans: "Q3A: 80, Q3B: $\\frac{e - 1}{2}$",
        time: 45
    },
    {
        text: "<strong>Q4.</strong><br><strong>A:</strong> A shop offers a $20\\%$ discount on an item marked at ₹1500. If the customer pays an additional $5\\%$ GST on the discounted price, what is the final amount paid?<br><strong>B:</strong> A shop offers a $25\\%$ discount on an item marked at ₹2000. If the customer pays an additional $5\\%$ GST on the discounted price, what is the final amount paid?",
        ans: "Q4A: ₹1260, Q4B: ₹1575",
        time: 45
    },
    {
        text: "<strong>Q5.</strong><br><strong>A:</strong> If $\\int_{0}^{2} f(x) dx = 6$, find $\\int_{0}^{2} (f(x) + 3) dx$.<br><strong>B:</strong> If $\\int_{0}^{3} f(x) dx = 8$, find $\\int_{0}^{3} (f(x) + 2) dx$.",
        ans: "Q5A: 12, Q5B: 14",
        time: 45
    },
    {
        text: "<strong>Q6.</strong><br><strong>A:</strong> Find the smallest positive integer that is divisible by 12, 18 and 30.<br><strong>B:</strong> Find the smallest positive integer by which 108 must be multiplied to make it a perfect cube.",
        ans: "Q6A: 180, Q6B: 2",
        time: 45
    },
    {
        text: "<strong>Q7.</strong><br><strong>A:</strong> A cafe has ₹1,200 to spend on advertising. An online ad costs ₹100 and reaches 80 people, while a newspaper ad costs ₹200 and reaches 150 people. If the cafe must spend the entire ₹1,200, how many of each should it choose to reach the maximum number of people?<br><strong>B:</strong> A college has ₹1,500 to spend on promoting an event. A social-media ad costs ₹150 and reaches 120 people, while a poster campaign costs ₹300 and reaches 250 people. If the college must spend the entire ₹1,500, how many of each should it choose to reach the maximum number of people?",
        ans: "Q7A: 12 online, 0 newspaper (or 0 online, 6 newspaper), Q7B: 10 social-media, 0 posters",
        time: 60
    },
    {
        text: "<strong>Q8.</strong><br><strong>A:</strong> The sum of first $n$ odd numbers is ……. <br><strong>B:</strong> The sum of first $n$ even numbers is………. ",
        ans: "Q8A: $n^2$, Q8B: $n(n+1)$",
        time: 30
    },
    {
        text: "<strong>Q9.</strong><br><strong>A:</strong> How many positive divisors does $2^4 \\times 3^3 \\times 5^2$ have?<br><strong>B:</strong> Find the smallest positive integer that leaves remainder 2 when divided by 3 and remainder 3 when divided by 5.",
        ans: "Q9A: 60, Q9B: 8",
        time: 45
    },
    {
        text: "<strong>Q10.</strong><br><strong>A:</strong> Evaluate $\\sum_{k=1}^{10} \\frac{1}{k(k+1)}$.<br><strong>B:</strong> Find $\\sum_{k=0}^{8} 2^k$.",
        ans: "Q10A: $\\frac{10}{11}$, Q10B: 511",
        time: 45
    },
    {
        text: "<strong>Q11.</strong><br><strong>A:</strong> A can complete a project in 12 days and B in 18 days. They work together for 4 days, after which A leaves. How many more days will B need to complete the remaining work?<br><strong>B:</strong> A can complete a project in 15 days and B in 30 days. They work together for 6 days, after which A leaves. How many more days will B need to complete the remaining work?",
        ans: "Q11A: 8 days, Q11B: 10 days",
        time: 45
    },
    {
        text: "<strong>Q12.</strong><br><strong>A:</strong> Find the remainder when $3^{50}$ is divided by 5.<br><strong>B:</strong> What is the last digit of $3^{47}$?",
        ans: "Q12A: 4, Q12B: 7",
        time: 45
    },
    {
        text: "<strong>Q13.</strong><br><strong>A:</strong> A cinema charges ₹200 per ticket and normally sells 120 tickets. For every ₹20 increase, 10 fewer tickets are sold. At what ticket price will the cinema earn the maximum revenue?<br><strong>B:</strong> A concert charges ₹150 per ticket and normally sells 200 tickets. For every ₹25 increase, 20 fewer tickets are sold. At what ticket price will the concert earn the maximum revenue?",
        ans: "Q13A: ₹220, Q13B: ₹200",
        time: 45
    },
    {
        text: "<strong>Q14.</strong><br><strong>A:</strong> An investor buys 40 shares at ₹250 each and sells them at ₹280 each. If a brokerage fee of $1\\%$ is charged on total selling value, what is the net profit?<br><strong>B:</strong> An investor buys 50 shares at ₹200 each and sells them at ₹240 each. If a brokerage fee of $1\\%$ is charged on total selling value, what is the net profit?",
        ans: "Q14A: ₹1088, Q14B: ₹1880",
        time: 45
    },
    {
        text: "<strong>Q15.</strong><br><strong>A:</strong> The distance travelled by a car is $s(t) = t^2 + 4t$. What is the speed at $t = 5$, and how far will it travel during the next 2 seconds at that speed?<br><strong>B:</strong> The distance travelled by a cyclist is $s(t) = t^2 + 6t$. What is the speed at $t = 4$, and how far will it travel during the next 3 seconds at that speed?",
        ans: "Q15A: Speed 14 m/s, distance 28 m; Q15B: Speed 14 m/s, distance 42 m",
        time: 60
    },
    {
        text: "<strong>Q16.</strong><br><strong>A:</strong> A car's velocity is $v(t) = 4t + 2$ m/s (starting from rest at $t=0$). How far does it travel in the first 5 seconds?<br><strong>B:</strong> A cyclist's velocity is $v(t) = 6t + 4$ m/s (starting from rest at $t=0$). How far does it travel in the first 4 seconds?",
        ans: "Q16A: 60 metres, Q16B: 64 metres",
        time: 45
    },
    {
        text: "<strong>Q17.</strong><br><strong>A:</strong> Allocate ₹10,000 among Fund A ($8\\%$), Fund B ($10\\%$), and Fund C ($12\\%$). Min ₹2,000 in A, min ₹3,000 in B, max ₹4,000 in C to maximize return.<br><strong>B:</strong> Allocate ₹15,000 among Fund A ($6\\%$), Fund B ($9\\%$), and Fund C ($12\\%$). Min ₹3,000 in A, min ₹4,000 in B, max ₹6,000 in C to maximize return.",
        ans: "Q17A: ₹3000 in A, ₹3000 in B, ₹4000 in C; Q17B: ₹5000 in A, ₹4000 in B, ₹6000 in C",
        time: 60
    },
    {
        text: "<strong>Q18.</strong><br><strong>A:</strong> Given matrices $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 2 \\end{pmatrix}$ and $B = \\begin{pmatrix} 5 & 2 \\\\ 1 & 3 \\end{pmatrix}$, find $X$ such that $AX = B$.<br><strong>B:</strong> Given matrix $A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 2 & 1 \\\\ 0 & 0 & 3 \\end{pmatrix}$, find $\\det(A^2 + A^3)$.",
        ans: "Q18A: $X = \\begin{pmatrix} 9 & 1 \\\\ -13 & 0 \\end{pmatrix}$, Q18B: 864",
        time: 60
    },
    {
        text: "<strong>Q19.</strong><br><strong>A:</strong> Survey of 120 students: 65 Music, 55 Dance, 50 Sports. 25 Music & Dance, 20 Music & Sports, 18 Dance & Sports, 10 all three. How many in at least one?<br><strong>B:</strong> Survey of 150 students: 80 Python, 65 Java, 55 C++. 30 Python & Java, 25 Python & C++, 20 Java & C++, 12 all three. How many in at least one?",
        ans: "Q19A: 92, Q19B: 112",
        time: 60
    },
    {
        text: "<strong>Q20.</strong><br><strong>A:</strong> Farmer has 96 m fencing for three sides of a rectangular field (fourth side along a wall). Divide into two equal sections using one fence perpendicular to the wall. Maximize area dimensions.<br><strong>B:</strong> Farmer has 120 m fencing for three sides of a rectangular field (fourth side along a wall). Divide into two equal sections using one fence perpendicular to the wall. Maximize area dimensions.",
        ans: "Q20A: 24m by 24m, Q20B: 30m by 30m",
        time: 60
    },
    {
        text: "<strong>Q21.</strong><br><strong>A:</strong> $MC(x) = 2x + 20$, $MR(x) = 80 - 2x$. Current production 10 units. Should the company increase production from 10 to 20 units? Find net change in profit.<br><strong>B:</strong> $MC(x) = 3x + 15$, $MR(x) = 90 - 3x$. Current production 10 units. Should the company increase production from 10 to 20 units? Find net change in profit.",
        ans: "Q21A: Yes, net change in profit is +₹100; Q21B: Yes, net change in profit is +₹125",
        time: 60
    },
    {
        text: "<strong>Q22.</strong><br><strong>A:</strong> Committee of 4 students selected from 6 boys and 5 girls, containing at least 2 girls.<br><strong>B:</strong> Box contains 8 bulbs (3 defective). Three selected without replacement. Probability at least one is defective but not all three.",
        ans: "Q22A: 265, Q22B: $\\frac{41}{56}$",
        time: 60
    },
    {
        text: "<strong>Q23.</strong><br><strong>A:</strong> If $y = x^x$, find $\\frac{dy}{dx}$ at $x = e$.<br><strong>B:</strong> If $y = \\frac{x^2 + 1}{e^x}$, find $y'$ at $x = 1$.",
        ans: "Q23A: $2e^e$ (or $e^e(1+\\ln e)$), Q23B: 0",
        time: 60
    },
    {
        text: "<strong>Q24.</strong><br><strong>A:</strong> Revenue $R(x) = 100x - x^2$, Cost $C(x) = 20x + 400$. Units to sell for maximum profit, and max profit?<br><strong>B:</strong> Revenue $R(x) = 120x - x^2$, Cost $C(x) = 20x + 500$. Units to sell for maximum profit, and max profit?",
        ans: "Q24A: 40 units, Max profit = ₹1200; Q24B: 50 units, Max profit = ₹2000",
        time: 60
    }
];