<script>
    import ArtistCard from "$lib/components/ArtistCard.svelte";
    let {data} = $props();
    let artists = data.artists;
</script>

<a class="btn btn-primary" role="button" href="/artists/create">Add an Artist</a>

  <h1>Artists</h1>
  <div class="row">
    {#each artists as artist}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <ArtistCard artist={artist}></ArtistCard>
      </div>
    {/each}
  </div>