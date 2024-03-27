# Inititialize project

```Js
pnpm dlx nuxi@latest init <project-name>
```

## Pages

1- Initialize page without default

```Js
<template>
  <NuxtPage />
</template>
```

2- Create file index.vue in directory pages

### Default page

```Js
<script setup></script>

<template>
  <div>
    <slot />
  </div>
</template>

```

3- Create page with default page

```Js
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```
