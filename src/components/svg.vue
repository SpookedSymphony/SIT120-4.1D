<style scoped>
.svg {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.gradient-transition {
    fill: url(#gradient1);
    animation: gradientTransition 1s linear infinite;
}

@keyframes gradientTransition {
    0%, 15% {
        fill: url(#smallGradient);
    }
    30%, 45% {
        fill: url(#mediumGradient);
    }
    60%, 75% {
        fill: url(#noGradient);
    }
    90%, 100% {
        fill: url(#largeGradient);
    }
}


</style>

<template>
    <div class="svg">
        <a href="/">
            <svg height="130" width="200">
                <defs>
                    <radialGradient id="smallGradient">
                        <stop offset="0%" style="stop-color: teal"></stop>
                        <stop offset="100%" style="stop-color: darksalmon"></stop>
                    </radialGradient>
                    <radialGradient id="mediumGradient">
                        <stop offset="50%" style="stop-color: teal"></stop>
                        <stop offset="100%" style="stop-color: darksalmon"></stop>
                    </radialGradient>
                    <radialGradient id="noGradient">
                        <stop offset="75%" style="stop-color: teal"></stop>
                        <stop offset="100%" style="stop-color: darksalmon"></stop>
                    </radialGradient>
                    <radialGradient id="largeGradient">
                        <stop offset="0%" style="stop-color: darksalmon"></stop>
                        <stop offset="100%" style="stop-color: teal"></stop>
                    </radialGradient>
                </defs>
                <ellipse cx="100" cy="70" rx="85" ry="55" class="gradient-transition" />
                <text fill="black" font-size="45" font-family="Verdana" x="68" y="86">AS</text>
            </svg>
        </a>
    </div>
</template>


