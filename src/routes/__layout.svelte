<script>
    import "../app.css";
    import Nav from "../components/navbar.svelte";
    import Foot from "../components/footer.svelte";
    import { ModalOpen } from "../stores/ModalStore";
    import Modal from "../components/modal.svelte";
  </script>
  {#if $ModalOpen}
    <Modal></Modal>
  {/if}
  <Nav/>
  <slot />
  <Foot/>