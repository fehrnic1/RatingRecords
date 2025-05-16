<script>
    import RecordCard from "$lib/components/RecordCard.svelte";
    let { data } = $props();
    let artist = data.artist;
    let records = data.records;
</script>

<div class="mb-3">
    <a class="btn btn-danger" role="button" href="/artists">Back</a>
</div>

<div class="container">
    <div class="row">
        <div>
            <h1>{artist.name}</h1>
        </div>
    </div>

    <div class="row">
        <div class="col md-4 mb-2 gx-2">
            <div>
                <img src={artist.logo} alt="" height="400" />
            </div>
        </div>
        <div class="col md-8">
            <div>
                Origin: {artist.originCity} ({artist.originCountry})
            </div>
            <div>Formed in: {artist.formedIn}</div>
            <div><a class="btn btn-danger mt-3" role="button" href={artist.bandCampLink} target="_blank">Band Camp</a></div>
        </div>
    </div>
</div>



<div class="container">
    <div class="row">
        {#each records as record}
            <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
                <RecordCard {record}></RecordCard>
            </div>
        {/each}
    </div>
</div>
