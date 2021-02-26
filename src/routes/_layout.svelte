<script>
  import GlobalStyle from "../components/GlobalStyle.svelte";
</script>

<GlobalStyle />

<p>See me above the counter.</p>

<main>
  <slot />
</main>

<p>See me below the counter.</p>
