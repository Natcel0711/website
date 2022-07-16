<script>
    import "../app.css";
    import Nav from "../components/navbar.svelte";
    import Foot from "../components/footer.svelte";
    import { ModalOpen, getInfo } from "../stores/ModalStore";
    import Modal from "../components/modal.svelte";
    import {supabase} from "../lib/supabase.js";
    console.log(supabase);
    getInfo();
  </script>
  {#if $ModalOpen}
    <Modal></Modal>
  {/if}
  <Nav/>
  <slot />
  <Foot/>