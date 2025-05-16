<script>
    import RecordCard from "$lib/components/RecordCard.svelte";
    let { data } = $props();
    let label = data.label;
    let records = data.records;
</script>

<div class="mb-3">
    <a class="btn btn-danger" role="button" href={label.logo}>Back</a>
</div>

<div class="container">
    <div class="row">
        <div>
            <h1>{label.name}</h1>
        </div>
    </div>

    <div class="row">
        <div class="col md-4">
            <div>
                <img src="/default_label.jpg" alt="" height="400" />
            </div>
        </div>
        <div class="col md-8">
            <div>Origin: {label.originCity} ({label.originCountry})</div>
            <div><a href={label.bandCampLink} target="_blank">Band Camp Link</a></div>

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