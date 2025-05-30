<script>
  import RecordCard from "$lib/components/RecordCard.svelte";
  let { data } = $props();
  let oldRecords = data.oldRecords;
  let topRecords = data.topRecords;
  let slideCounter = -1;
</script>

<div class="container">
<h1>RatingRecords</h1>
<h5>Register, categorize and rate your vinyl</h5>
</div>

<br>


<div class="container">
  <div class="row">

<!-- //////////////////////// CAROUSEL LONG TIME NO LISTEN ////////////////////////////////// -->
    <div class="col-xl-6">
      <h2>Not listened in a while</h2>
      <div
        id="longNoListen"
        class="carousel slide"
        data-bs-ride="carousel"
      >

        <div class="carousel-inner">
          {#each oldRecords as record}
            <div class="carousel-item active">
              <img src={record.cover} class="d-block w-100" alt=""/>
              <div class="carousel-caption d-none d-md-block">
                <h2><a class="custom-link" href={"/records/" + record._id}>{record.title}</a></h2>
                <h4>{record.artist}</h4>
              </div>
            </div>
          {/each}
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#longNoListen"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#longNoListen"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

<!-- ////////////////////////////// BEST RATED ////////////////////**////////////////*/////////// -->
<div class="col-xl-6">
      <h2>Best rated</h2>
      <div
        id="BestRated"
        class="carousel slide"
        data-bs-ride="carousel"
      >

        <div class="carousel-inner">
          {#each topRecords as record}
            <div class="carousel-item active">
              <img src={record.cover} class="d-block w-100" alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h2><a class="custom-link" href={"/records/" + record._id}>{record.title}</a></h2>
                <h4>{record.artist}</h4>
              </div>
            </div>
          {/each}
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#BestRated"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#BestRated"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        
      </div>
    </div>
<!-- //////////////////////////////////////////////////////////////////////////////////////////////// -->

  </div>
</div>
