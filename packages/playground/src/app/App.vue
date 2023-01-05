<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
  <div class="app">
    <div class="fixed lg:block pb-10 px-8 overflow-y-auto z-20 inset-0 w-200px">
      <nav id="nav" class="lg:text-sm lg:leading-6 relative">
        <ul class="menu">
          <li class="mt-12 lg:mt-8">
            <h5 class="mb-8 lg:mb-3 font-semibold text-slate-900
            dark:text-slate-200">Getting Started</h5>
            <ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
              <li>
                <a class="menu-item" href="/home">
                Colors
                </a>
              </li>
              <li>
                <a class="menu-item" href="/home">
                Typings
                </a>
              </li>
              <li>
                <a class="menu-item" href="/home">
                Buttons
                </a>
              </li>
              <li>
                <a class="menu-item" href="/home">
                Spaces
                </a>
              </li>
              <li>
                <a class="menu-item" href="/home">
                Icons
                </a>
              </li>
            </ul>
            </li>

            <li class="mt-12 lg:mt-8">
            <h5 class="mb-8 lg:mb-3 font-semibold text-slate-900
            dark:text-slate-200">Components</h5>
            <ul class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
              <li>
                <h5 class="mb-8 lg:mb-3 ml-15 font-semibold text-slate-900
                dark:text-slate-200">Form</h5>
                <ul class="space-y-6 ml-15 lg:space-y-2">
                  <li>
                    <a class="menu-item" href="/components">
                    Input
                    </a>
                  </li>
                  <li>
                    <a class="menu-item" href="/components">
                    Select
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5 class="mb-8 lg:mb-3 ml-15 font-semibold text-slate-900
                dark:text-slate-200">Data</h5>
                <ul class="space-y-6 lg:space-y-2 ml-15">
                  <li>
                    <a class="menu-item" href="/components">
                    Table
                    </a>
                  </li>
                  <li>
                    <a class="menu-item" href="/components">
                    Infinite Scroll
                    </a>
                  </li>
                  <li>
                    <a class="menu-item" href="/components">
                    Progress bar
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5 class="mb-8 lg:mb-3 ml-15 font-semibold text-slate-900
                dark:text-slate-200">Navigations</h5>
                <ul class="space-y-6 ml-15 lg:space-y-2">
                  <li>
                    <a class="menu-item" href="/components">
                    Menu
                    </a>
                  </li>
                  <li>
                    <a class="menu-item" href="/components">
                    Tabs
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            </li>
          </ul>
      </nav>
    </div>
    <router-view class="px-32px w-full pl-250px" />
  </div>
</template>

<style lang="postcss">
@import '@assets/css/font.css';
@import '@assets/css/global.css';

html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  color: $text-main;
  background-color: white;
  * {
    box-sizing: border-box;
  }
}

.app {
  height: 100%;
  display: flex;
}

a {
  text-decoration: none;
  color: unset;
}

#app,
.app-content {
  height: 100%;
}

.container {
  max-width: 1200px;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
}

.menu {
  .menu-item {
    @apply block border-l pl-4 -ml-px border-transparent hover:border-slate-400
                dark:hover:border-slate-500 text-slate-700 hover:text-slate-900
                dark:text-slate-400 dark:hover:text-slate-300;
  }
}
</style>
