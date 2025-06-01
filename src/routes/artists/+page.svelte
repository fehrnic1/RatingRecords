<script>
  import ArtistCard from "$lib/components/ArtistCard.svelte";
  let { data } = $props();
  let artists = data.artists;
</script>

<!-- HEAD -->

<div class="container">
  <div class="row">

    <div class="col">
      <h1>ARTISTS</h1>
    </div>

    <div class="col cornerButton">
      <a class="btn btn-primary" role="button" href="/artists/create">
        Add an Artist
      </a>
    </div>

  </div>
</div>

<!-- BODY -->

<div class="container">
  <div class="row">
    {#each artists as artist}
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-4 gx-4">
        <ArtistCard {artist}></ArtistCard>
      </div>
    {/each}
  </div>
</div>
