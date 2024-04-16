<script setup lang="ts"></script>
<template>
  <div class="background">
    <div class="name">
      <a class="name-hover" href="/works">
        <p class="fadeUp-1 no-br va-m">R</p>
        <p class="fadeUp-2 no-br va-m">O</p>
        <p class="fadeUp-3 no-br va-m">T</p>
        <p class="fadeUp-4 no-br va-m">O</p>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.svg-sample-background-image::after {
  content: "";
  display: block;
  background-repeat: no-repeat;
  background-image: url("../assets/svg/wave.svg");
  height: 0;
  width: 100%;
  padding-bottom: 10.55555%; /* = 152 / 1440 */
}

@media screen and (min-width: 768px) {
  .svg-sample-background-image::after {
    background-image: url("../assets/svg/wave.svg");
  }
}

.va-m {
  vertical-align: middle;
}

.name-hover {
  text-decoration: none;
  color: #05091e;
}
:hover {
  color: #da2128;
}

.fadeUp-1 {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 0;
}

.fadeUp-2 {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.fadeUp-3 {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.fadeUp-4 {
  animation-name: fadeUpAnime;
  animation-duration: 2s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.fadeUp-5 {
  animation-name: arrowMoveRight;
  animation-duration: 2s;
  animation-delay: 0.8s;
  animation-fill-mode: forwards;
  opacity: 0;
  font-size: 5vh;
  text-align: center;
  margin-left: 7%;
  vertical-align: middle;
}

.no-br {
  display: inline-block;
}

@keyframes fadeUpAnime {
  from {
    filter: blur(10px);
    opacity: 0;
    transform: translateY(70px);
    tranceform: translateX(-40px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
    transform: translateX(0px);
  }
}

@keyframes arrowMoveRight {
  from {
    filter: blur(10px);
    opacity: 0;
    transform: translateY(70px);
  }

  to {
    opacity: 1;
    transform: translateX(40px);
  }
}

.name {
  padding-top: 28vh;
  height: 85vh;
  font-size: 10vw;
  text-align: center;

  transition: all 2s ease-in-out;
  color: #05091e;
  background: #f4f4f4;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-size: auto auto;
  background-image: url("data:image/svg+xml;base64,PHN2ZwogICAgICB3aWR0aD0iMTAwJSIKICAgICAgaGVpZ2h0PSIxMDAlIgogICAgICBpZD0ic3ZnIgogICAgICB2aWV3Qm94PSIwIDAgMTQ0MCAzOTAiCiAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgY2xhc3M9InRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGRlbGF5LTE1MCIKICAgID4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTAwJSIgeTI9IjUwJSI+CiAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjUlIiBzdG9wLWNvbG9yPSIjZGEyMTI4Ij48L3N0b3A+CiAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ijk1JSIgc3RvcC1jb2xvcj0iIzU1MmY3ZiI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHBhdGgKICAgICAgICBkPSJNIDAsNDAwIEwgMCw2MCBDIDE0MCw2My40NjY2NjY2NjY2NjY2NyAyODAsNjYuOTMzMzMzMzMzMzMzMzQgNDUzLDYwIEMgNjI2LDUzLjA2NjY2NjY2NjY2NjY3IDgzMiwzNS43MzMzMzMzMzMzMzMzMzQgMTAwMiwzNCBDIDExNzIsMzIuMjY2NjY2NjY2NjY2NjY2IDEzMDYsNDYuMTMzMzMzMzMzMzMzMzMgMTQ0MCw2MCBMIDE0NDAsNDAwIEwgMCw0MDAgWiIKICAgICAgICBzdHJva2U9Im5vbmUiCiAgICAgICAgc3Ryb2tlLXdpZHRoPSIwIgogICAgICAgIGZpbGw9InVybCgjZ3JhZGllbnQpIgogICAgICAgIGZpbGwtb3BhY2l0eT0iMC4yNjUiCiAgICAgICAgY2xhc3M9InRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBkZWxheS0xNTAgcGF0aC0wIgogICAgICA+PC9wYXRoPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCUiIHkxPSI1MCUiIHgyPSIxMDAlIiB5Mj0iNTAlIj4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iNSUiIHN0b3AtY29sb3I9IiNkYTIxMjgiPjwvc3RvcD4KICAgICAgICAgIDxzdG9wIG9mZnNldD0iOTUlIiBzdG9wLWNvbG9yPSIjNTUyZjdmIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cGF0aAogICAgICAgIGQ9Ik0gMCw0MDAgTCAwLDE0MCBDIDE3OC4xMzMzMzMzMzMzMzMzMywxNDkuMDY2NjY2NjY2NjY2NjYgMzU2LjI2NjY2NjY2NjY2NjY1LDE1OC4xMzMzMzMzMzMzMzMzNSA1MjUsMTUxIEMgNjkzLjczMzMzMzMzMzMzMzMsMTQzLjg2NjY2NjY2NjY2NjY1IDg1My4wNjY2NjY2NjY2NjY4LDEyMC41MzMzMzMzMzMzMzMzMiAxMDA0LDExNiBDIDExNTQuOTMzMzMzMzMzMzMzMiwxMTEuNDY2NjY2NjY2NjY2NjggMTI5Ny40NjY2NjY2NjY2NjY3LDEyNS43MzMzMzMzMzMzMzMzNSAxNDQwLDE0MCBMIDE0NDAsNDAwIEwgMCw0MDAgWiIKICAgICAgICBzdHJva2U9Im5vbmUiCiAgICAgICAgc3Ryb2tlLXdpZHRoPSIwIgogICAgICAgIGZpbGw9InVybCgjZ3JhZGllbnQpIgogICAgICAgIGZpbGwtb3BhY2l0eT0iMC40IgogICAgICAgIGNsYXNzPSJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZGVsYXktMTUwIHBhdGgtMSIKICAgICAgPjwvcGF0aD4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTAwJSIgeTI9IjUwJSI+CiAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjUlIiBzdG9wLWNvbG9yPSIjZGEyMTI4Ij48L3N0b3A+CiAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ijk1JSIgc3RvcC1jb2xvcj0iIzU1MmY3ZiI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHBhdGgKICAgICAgICBkPSJNIDAsNDAwIEwgMCwyMjAgQyAxMzYuOTMzMzMzMzMzMzMzMzQsMjMyLjY2NjY2NjY2NjY2NjY2IDI3My44NjY2NjY2NjY2NjY3LDI0NS4zMzMzMzMzMzMzMzMzMSA0MTYsMjQ0IEMgNTU4LjEzMzMzMzMzMzMzMzMsMjQyLjY2NjY2NjY2NjY2NjY5IDcwNS40NjY2NjY2NjY2NjY3LDIyNy4zMzMzMzMzMzMzMzMzNCA4NzcsMjIxIEMgMTA0OC41MzMzMzMzMzMzMzMzLDIxNC42NjY2NjY2NjY2NjY2NiAxMjQ0LjI2NjY2NjY2NjY2NjcsMjE3LjMzMzMzMzMzMzMzMzMxIDE0NDAsMjIwIEwgMTQ0MCw0MDAgTCAwLDQwMCBaIgogICAgICAgIHN0cm9rZT0ibm9uZSIKICAgICAgICBzdHJva2Utd2lkdGg9IjAiCiAgICAgICAgZmlsbD0idXJsKCNncmFkaWVudCkiCiAgICAgICAgZmlsbC1vcGFjaXR5PSIwLjUzIgogICAgICAgIGNsYXNzPSJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZGVsYXktMTUwIHBhdGgtMiIKICAgICAgPjwvcGF0aD4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iNTAlIiB4Mj0iMTAwJSIgeTI9IjUwJSI+CiAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjUlIiBzdG9wLWNvbG9yPSIjZGEyMTI4Ij48L3N0b3A+CiAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ijk1JSIgc3RvcC1jb2xvcj0iIzU1MmY3ZiI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHBhdGgKICAgICAgICBkPSJNIDAsNDAwIEwgMCwzMDAgQyAxOTguOCwyOTQuOTMzMzMzMzMzMzMzMzQgMzk3LjYsMjg5Ljg2NjY2NjY2NjY2NjcgNTU0LDI4OCBDIDcxMC40LDI4Ni4xMzMzMzMzMzMzMzMzIDgyNC40MDAwMDAwMDAwMDAxLDI4Ny40NjY2NjY2NjY2NjY2NCA5NjUsMjkwIEMgMTEwNS42LDI5Mi41MzMzMzMzMzMzMzMzNiAxMjcyLjgsMjk2LjI2NjY2NjY2NjY2NjY1IDE0NDAsMzAwIEwgMTQ0MCw0MDAgTCAwLDQwMCBaIgogICAgICAgIHN0cm9rZT0ibm9uZSIKICAgICAgICBzdHJva2Utd2lkdGg9IjAiCiAgICAgICAgZmlsbD0idXJsKCNncmFkaWVudCkiCiAgICAgICAgZmlsbC1vcGFjaXR5PSIxIgogICAgICAgIGNsYXNzPSJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZGVsYXktMTUwIHBhdGgtMyIKICAgICAgPjwvcGF0aD4KICAgIDwvc3ZnPg==");
}
</style>
