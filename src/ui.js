// ============================================================
// ui.js — Todo lo que toca el DOM
// ============================================================
// Patrón: una sola función render(state) decide qué mostrar.
// Nunca manipulamos el DOM desde main.js ni desde api.js.
// ============================================================

// Referencias DOM — tomar UNA sola vez al cargar el módulo
const $idle = document.querySelector("#state-idle");
const $loading = document.querySelector("#state-loading");
const $success = document.querySelector("#state-success");
const $error = document.querySelector("#state-error");
const $card = document.querySelector("#pokemon-card");
const $errMsg = document.querySelector("#error-message");
const $badge = document.querySelector("#state-badge");
const $btn = document.querySelector("#search-btn");

// TODO 1: Implementar render(state)
//
// Patrón exacto a implementar:
//
//   1. Ocultar TODOS los paneles (agregar clase "hidden" a los 4)
//      Tip: [$idle, $loading, $success, $error].forEach(...)
//
//   2. Actualizar el badge de debug:
//      $badge.textContent = `estado: ${state.status}`
//
//   3. Según state.status, quitar "hidden" del panel correspondiente:
//
//      "idle"    -> mostrar $idle, habilitar botón ($btn.disabled = false)
//
//      "loading" -> mostrar $loading, deshabilitar botón ($btn.disabled = true)
//                   (evita doble submit mientras carga)
//
//      "success" -> mostrar $success
//                   $card.innerHTML = buildPokemonCard(state.data)
//                   habilitar botón
//
//      "error"   -> mostrar $error
//                   $errMsg.textContent = state.error
//                   habilitar botón
//
// export function render(state) { ... }

// TODO 2: Implementar buildPokemonCard(pokemon)
//
// Construye el HTML de la tarjeta con estos campos del objeto Pokémon:
//   - pokemon.name
//   - pokemon.id  (formateado como #001, #025, etc)
//   - pokemon.sprites.front_default  (URL de la imagen)
//   - pokemon.height / 10  (viene en decímetros -> convertir a metros)
//   - pokemon.weight / 10  (viene en hectogramos -> convertir a kg)
//
// Estructura HTML a usar (con las clases del CSS):
//
//   <img src="..." alt="Sprite de pikachu" />
//   <p class="pokemon-card__id">#025</p>
//   <h2 class="pokemon-card__name">pikachu</h2>
//   <div class="pokemon-card__stats">
//     <div class="pokemon-card__stat">
//       <span>Altura</span><strong>0.4 m</strong>
//     </div>
//     <div class="pokemon-card__stat">
//       <span>Peso</span><strong>6.0 kg</strong>
//     </div>
//   </div>
//
// function buildPokemonCard(pokemon) { ... }
