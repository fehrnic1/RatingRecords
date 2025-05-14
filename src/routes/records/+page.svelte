<script>
    import RecordCard from "$lib/components/RecordCard.svelte";
    let {data} = $props();
    let records = data.records;
  </script>
  

    <a class="btn btn-primary" role="button" href="/records/create">Add</a>
 

  <h1>Records</h1>

  <div class="row">
    {#each records as record}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <RecordCard record={record}></RecordCard>
      </div>
    {/each}
  </div>