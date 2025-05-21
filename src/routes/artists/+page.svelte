<script>
  import ArtistCard from "$lib/components/ArtistCard.svelte";
  let { data } = $props();
  let artists = data.artists;
</script>

<div class="container topBar">
  <div class="row">
    <div class="col">
      <h1>ARTISTS</h1>
    </div>
    <div class="col cornerButton">
      <a class="btn btn-primary" role="button" href="/artists/create"
        >Add an Artist</a
      >
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    {#each artists as artist}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-4 gx-4">
        <ArtistCard {artist}></ArtistCard>
      </div>
    {/each}
  </div>
</div>
