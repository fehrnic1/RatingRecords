<script>
    import RecordCard from "$lib/components/RecordCard.svelte";
    let { data } = $props();
    let artist = data.artist;
    let records = $derived.by(() => {return data.records;});
</script>

<!-- HEAD -->

<div class="container detailCard">
    <div class="row">

        <div class="col">
            <div>
                <img src={artist.logo} alt="" class="img-fluid" />
            </div>
        </div>

        <div class="col">
            <h1>{artist.name}</h1>
            <div>Origin: {artist.originCity} ({artist.originCountry})</div>
            <div>Formed in: {artist.formedIn}</div>
            <div>
                <a
                    class="btn btn-warning mt-3"
                    role="button"
                    href={artist.bandCampLink}
                    target="_blank">Band Camp</a
                >
            </div>
        </div>

        <div class="col cornerButton">
            <a class="btn btn-danger" role="button" href="/artists">Back</a>
        </div>

    </div>
</div>

<!-- BODY -->

<div class="container detailCard">
    <div class="row">
        {#each records as record}
            <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-4 gx-4">
                <RecordCard {record}></RecordCard>
            </div>
        {/each}
    </div>
</div>
