<script>
  import RecordCard from "$lib/components/RecordCard.svelte";
  let { data } = $props();
  let oldRecords = data.oldRecords;
  let topRecords = data.topRecords;
</script>

<h1>RatingRecords</h1>

<div class="container">
  <div class="row">

<!-- //////////////////////// CAROUSEL LONG TIME NO LISTEN ////////////////////////////////// -->
    <div class="col-xl-6">
      <h2>Not listened in a while</h2>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          {#each oldRecords as record}
            <div class="carousel-item active">
              <img src={record.cover} class="d-block w-100" alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h5>{record.artist}</h5>
                <p>Highlights: {record.highlights}</p>
              </div>
            </div>
          {/each}
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          {#each topRecords as record}
            <div class="carousel-item active">
              <img src={record.cover} class="d-block w-100" alt="" />
              <div class="carousel-caption d-none d-md-block">
                <h5>{record.artist}</h5>
                <p>Highlights: {record.highlights}</p>
              </div>
            </div>
          {/each}
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
