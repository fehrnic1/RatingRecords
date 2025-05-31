<script>
    import RecordCard from "$lib/components/RecordCard.svelte";
    let { data } = $props();
    let label = data.label;
    let records = data.records;
</script>

<!-- DETAIL-CONTAINER -->

<div class="container detailCard">
    <div class="row">
        <div class="col md-4">
            <div>
                <img src={label.logo} alt="" class="img-fluid" />
            </div>
        </div>

        <div class="col md-4">
            <h1>{label.name}</h1>
            <div>Origin: {label.originCity} ({label.originCountry})</div>
            <div>
                <a
                    class="btn btn-danger mt-3"
                    role="button"
                    href={label.bandCampLink}
                    target="_blank">Band Camp</a
                >
            </div>
        </div>
        <div class="col cornerButton">
            <a class="btn btn-danger" role="button" href="/artists">Back</a>
        </div>
    </div>
</div>

<!-- RECORD-CARDS BY LABEL -->

<div class="container detailCard">
    <div class="row">
        {#each records as record}
            <div class="col-sm-6 col-md-4 col-lg-3 mb-4 gx-4">
                <RecordCard {record}></RecordCard>
            </div>
        {/each}
    </div>
</div>
