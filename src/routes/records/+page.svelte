<script>
  import RecordCard from "$lib/components/RecordCard.svelte";
  let { data } = $props();
  let records = data.records;
</script>

<div class="container topBar">
<div class="row">
  <div class="col">
    <h1>RECORDS</h1>
  </div>
  <div class="col addButton">
    <a class="btn btn-primary" role="button" href="/records/create">Add a Record</a>
  </div>
</div>
</div>


<div class="container categoryCard">
  <div class="row">
    {#each records as record}
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <RecordCard {record}></RecordCard>
      </div>
    {/each}
  </div>
</div>
