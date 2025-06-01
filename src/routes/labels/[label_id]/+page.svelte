<script>
    import RecordCard from "$lib/components/RecordCard.svelte";
    let { data } = $props();
    let label = data.label;
    let records = $derived.by(() => {return data.records;});
</script>

<!-- HEAD -->

<div class="container detailCard">
    <div class="row">

        <div class="col">
            <div>
                <img src={label.logo} alt="" class="img-fluid" />
            </div>
        </div>

        <div class="col">
            <h1>{label.name}</h1>
            <div>Origin: {label.originCity} ({label.originCountry})</div>
            <div>
                <a
                    class="btn btn-warning mt-3"
                    role="button"
                    href={label.bandCampLink}
                    target="_blank">Band Camp</a
                >
            </div>
        </div>

        <div class="col cornerButton">
            <a class="btn btn-danger" role="button" href="/labels">Back</a>
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
