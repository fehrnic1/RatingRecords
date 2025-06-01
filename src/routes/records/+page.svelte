<script>
  import RecordCard from "$lib/components/RecordCard.svelte";
  let { data } = $props();
  let stackFilter = $state(false);
 
  // Überwachung von Änderungen an "records" druch "derived"
  let records = $derived.by(() => {
    if (stackFilter === true) {
      return data.records.filter ((record) => record.stack === true);
    }
    return data.records;
  });

</script>

<!-- HEAD -->

<div class="container">
  <div class="row">
    <div class="col">
      <h1>RECORDS</h1>
    </div>

    
    <div class="col cornerButton">
      <a class="btn btn-primary" role="button" href="/records/create">
        Add a Record
      </a>
    </div>
  </div>

  <div class="container">
  <div class="row">
    <div class="form-check form-switch">
      <input
        bind:checked={stackFilter}
        class="form-check-input"
        type="checkbox"
        id="stackFilter"
      />
      <label class="form-check-label" for="stackFilter">
        <h5>Show Your Stack</h5>
      </label>

    </div>
  </div>
  </div>
</div>

<!-- BODY -->

<div class="container categoryCard">
  <div class="row">
    {#each records as record}
      <div class="col-xs-12 col-sm-6 col-lg-4 col-xl-3 mb-4 gx-4">
        <RecordCard {record}></RecordCard>
      </div>
    {/each}
  </div>
</div>
