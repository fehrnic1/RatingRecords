<script>
    import RecordCard from "$lib/components/RecordCard.svelte";
    let { data } = $props();
    let records = data.records;
</script>

<div class="mb-3">
    <a class="btn btn-danger" role="button" href="/artists">Back</a>
</div>

<div class="container">
    <div class="row">
        <div>
            <h1>{data.artist.name}</h1>
        </div>
    </div>

    <div class="row">
        <div class="col md-4">
            <div>
                <img src="/default_artist.jpg" alt="" height="400" />
            </div>
        </div>
        <div class="col md-8">
            <div>
                Origin: {data.artist.originCity} ({data.artist.originCountry})
            </div>
            <div>Formed in: {data.artist.formedIn}</div>
            <div><a href={data.artist.bandCampLink}>Band Camp Link</a></div>
        </div>
    </div>



    <div class="row">
    {#each records as record}
        <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
            <RecordCard {record}></RecordCard>
        </div>
    {/each}
</div>


</div>




