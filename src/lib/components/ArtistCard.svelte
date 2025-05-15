<script>
    let { artist } = $props();
</script>



<div class="record-card">
    <div><img class="img-fluid" src=/default_artist.jpg alt="" /></div>
    <div class="details">
        <div class="title">{artist.name}</div>
        <div>Origin: {artist.originCity} ({artist.originCountry})</div>
        <div>Formed in: {artist.formedIn}</div>
        <div>Active: {artist.active}</div>
    </div>
</div>



<style>
    .record-card {
        border: 1px solid #555;
        height: 100%;
        background-color: #444;
        color: white;
    }
    .details {
        padding: 0.5em;
    }
    .title {
        font-weight: bold;
    }
</style>
