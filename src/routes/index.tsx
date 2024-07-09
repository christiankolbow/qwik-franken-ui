import { component$, useVisibleTask$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import UIkit from "uikit";

export default component$(() => {
  useVisibleTask$(() => {
    UIkit;
    setTimeout(() => {
      document.getElementById("dtarget")!.innerHTML =
        `<button class="uk-button uk-button-default" type="button"
              >Click 123</button
            >
            <div class="uk-drop uk-dropdown" uk-dropdown="mode: click">
              <ul class="uk-dropdown-nav uk-nav">
                <li class="uk-active"><a href="#">Active</a></li>
                <li><a href="#">Item</a></li>
                <li class="uk-nav-header">Header</li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li class="uk-nav-divider"></li>
                <li><a href="#">Item</a></li>
              </ul>
            </div>`;
    }, 2000);
    setTimeout(() => {}, 3000);
  }) 
  
  return (
    <>
      <div class="p-12">
        <h1 class="text-2xl font-bold mb-4">Qwik</h1>

        <h1 class="text-xl font-bold mb-4">Franken UI in Qwik</h1>

        <div class="flex">
          <div class="flex flex-col max-w-[600px] gap-5">
            <div class="flex flex-row items-center">
              <strong class="font-bold mr-6">Badges</strong>
              <span class="uk-badge">1</span>
              <span class="uk-badge">100</span>
            </div>

            <div class="flex flex-row items-center">
              <strong class="font-bold mr-6">Buttons</strong>
              <p uk-margin>
                <a class="uk-button uk-button-default" href="#">Link</a>
                <button class="uk-button uk-button-default">Button</button>
                <button class="uk-button uk-button-default" disabled>Disabled</button>
              </p>
            </div>

            <div class="flex flex-row items-center">
              <strong class="font-bold mr-6">Breadcrumb</strong>

              <div>
                <nav aria-label="Breadcrumb">
                  <ul class="uk-breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Linked Category</a></li>
                    <li class="uk-disabled"><a href="#">Disabled Category</a></li>
                    <li>
                      <span aria-current="page">Franken UI</span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div class="flex flex-row items-center">
              <strong class="font-bold mr-6">Dropdown</strong>

              <div id="dtarget">Lazy-adding Dropdown soon...</div>
            </div>

            <div class="flex flex-col gap-6">
              <strong class="font-bold mr-6">Form</strong>

              <div>
                <form class="flex flex-col gap-4">
                  <input class="uk-input" type="text" placeholder="This is great" />
                  <textarea class="uk-textarea"></textarea>
                  <input class="uk-radio" type="radio" />
                  <input class="uk-checkbox" type="checkbox" />
                  <input class="uk-range" type="range" />
                </form>
              </div>
            </div>
          </div>

          <div class="ml-16 flex flex-col gap-6">
            <div class="entry">
              <strong class="font-bold mr-6">Card</strong>

              <div class="mt-4">
                <div class="uk-width-1-2@m uk-card uk-card-body uk-card-default">
                  <h3 class="uk-card-title">Default</h3>
                  <p class="uk-margin">
                    Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div class="entry">
              <strong class="font-bold mr-6">Table</strong>
              <table class="uk-table uk-table-divider mt-4">
                <thead>
                  <tr>
                    <th>Table Heading</th>
                    <th>Table Heading</th>
                    <th>Table Heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                  <tr>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}
);


export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
