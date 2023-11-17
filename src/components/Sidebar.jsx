import { useLayoutEffect } from "react";

export default function Sidebar() {
  const folderItem = document.querySelectorAll(".folder-item");

  useLayoutEffect(() => {
    folderItem.forEach((item) => {
      const folderItem = item.firstChild;
      item.addEventListener("click", () => {
        if (folderItem.classList.contains("fa-folder-open")) {
          folderItem.classList.replace("fa-folder-open", "fa-folder");
        } else {
          folderItem.classList.replace("fa-folder", "fa-folder-open");
        }
      });
    });
  }, []);

  return (
    <ul>
      <li className="menu-btn menu-item">
        <i className="fa-solid fa-x"></i>
        <span>Close</span>
      </li>
      <li className="divide-bar"></li>

      {/* FILE */}
      <li className="menu-item menu-syn">
        <i className=""></i>
        <span>FILE</span>
      </li>
      <li className="menu-item">
        <i className="fa-solid fa-plus"></i>
        <span>New</span>
      </li>
      <li className="menu-item">
        <i className="fa-solid fa-folder-plus"></i>
        <span>New Folder</span>
      </li>

      <li className="divide-bar"></li>

      {/* TEMPLATE */}
      <li className="menu-item menu-syn">
        <i className=""></i>
        <span>TEMPLATE</span>
      </li>
      <ul className="tp-list">
        <li className="tp-item">
          <img
            src="https://preview.redd.it/y5zw8zs3rmp61.jpg?auto=webp&s=e3c86ed6132e112973ee848d27be3055a6d5202d"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://preview.redd.it/fern-stark-by-clou-v0-y7p09tit835b1.jpg?auto=webp&s=6bc9ece27fea6b73003a079f586343a097df45da"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://cdn.donmai.us/sample/c7/4a/__fern_and_stark_sousou_no_frieren_drawn_by_5o__sample-c74a2cfbccb9d0a44788e3565c2217a2.jpg"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://media.tenor.com/ciIF2JXDiPgAAAAd/stark-is-sensitive-stark-frieren.gif"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://preview.redd.it/y5zw8zs3rmp61.jpg?auto=webp&s=e3c86ed6132e112973ee848d27be3055a6d5202d"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://preview.redd.it/fern-stark-by-clou-v0-y7p09tit835b1.jpg?auto=webp&s=6bc9ece27fea6b73003a079f586343a097df45da"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://cdn.donmai.us/sample/c7/4a/__fern_and_stark_sousou_no_frieren_drawn_by_5o__sample-c74a2cfbccb9d0a44788e3565c2217a2.jpg"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://media.tenor.com/ciIF2JXDiPgAAAAd/stark-is-sensitive-stark-frieren.gif"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://preview.redd.it/y5zw8zs3rmp61.jpg?auto=webp&s=e3c86ed6132e112973ee848d27be3055a6d5202d"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://preview.redd.it/fern-stark-by-clou-v0-y7p09tit835b1.jpg?auto=webp&s=6bc9ece27fea6b73003a079f586343a097df45da"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://cdn.donmai.us/sample/c7/4a/__fern_and_stark_sousou_no_frieren_drawn_by_5o__sample-c74a2cfbccb9d0a44788e3565c2217a2.jpg"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://media.tenor.com/ciIF2JXDiPgAAAAd/stark-is-sensitive-stark-frieren.gif"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://preview.redd.it/y5zw8zs3rmp61.jpg?auto=webp&s=e3c86ed6132e112973ee848d27be3055a6d5202d"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://preview.redd.it/fern-stark-by-clou-v0-y7p09tit835b1.jpg?auto=webp&s=6bc9ece27fea6b73003a079f586343a097df45da"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://cdn.donmai.us/sample/c7/4a/__fern_and_stark_sousou_no_frieren_drawn_by_5o__sample-c74a2cfbccb9d0a44788e3565c2217a2.jpg"
            alt=""
          />
        </li>
        <li className="tp-item">
          <img
            src="https://media.tenor.com/ciIF2JXDiPgAAAAd/stark-is-sensitive-stark-frieren.gif"
            alt=""
          />
        </li>
      </ul>
      <li className="divide-bar"></li>

      {/* FOLDER */}
      <li className="menu-item menu-syn">
        <i className=""></i>
        <span>FOLDER</span>
      </li>
      <ul className="folder-list">
        <li className="menu-item folder-item">
          <i className="fa-solid fa-folder folder-icon"></i>
          <span>Folder 1</span>
        </li>
        <li className="menu-item folder-item">
          <i className="fa-solid fa-folder folder-icon"></i>
          <span>Folder 2</span>
        </li>
        <li className="menu-item folder-item">
          <i className="fa-solid fa-folder folder-icon"></i>
          <span>Folder 3</span>
        </li>
        <li className="menu-item folder-item">
          <i className="fa-solid fa-folder folder-icon"></i>
          <span>Folder 4</span>
        </li>
      </ul>
    </ul>
  );
}
