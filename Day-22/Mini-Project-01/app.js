document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    const controlsDiv = document.createElement("div");
    controlsDiv.className = "controls";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Enter Article Title...";

    const descInput = document.createElement("textarea");
    descInput.placeholder = "Enter Article Description...";
    descInput.rows = 3;

    const imgInput = document.createElement("input");
    imgInput.type = "text";
    imgInput.placeholder = "Enter Image URL (or leave blank for placeholder)...";

    const linkInput = document.createElement("input");
    linkInput.type = "text";
    linkInput.placeholder = "Enter 'Read More' URL (e.g., https://example.com)...";

    const generateBtn = document.createElement("button");
    generateBtn.textContent = "Generate News Article";

    controlsDiv.append(titleInput, descInput, imgInput, linkInput, generateBtn);
    app.append(controlsDiv);

    const outputContainer = document.createElement("div");
    app.append(outputContainer);

    generateBtn.addEventListener("click", () => {
        outputContainer.innerHTML = "";

        const titleText = titleInput.value.trim() || "Default Breaking News Title";
        const descText = descInput.value.trim() || "No description provided for this breaking update. Stay tuned for more live details.";
        const imgUrl = imgInput.value.trim() || "https://picsum.photos";
        const readMoreUrl = linkInput.value.trim() || "#";

        const card = document.createElement("div");
        card.className = "news-card";

        const badge = document.createElement("div");
        badge.className = "news-badge";
        badge.textContent = "Breaking News";

        const image = document.createElement("img");
        image.className = "news-image";
        image.src = imgUrl;
        image.alt = "News Media";

        const contentDiv = document.createElement("div");
        contentDiv.className = "news-content";

        const title = document.createElement("h2");
        title.className = "news-title";
        title.textContent = titleText;

        const description = document.createElement("p");
        description.className = "news-desc";
        description.textContent = descText;

        const readMoreLink = document.createElement("a");
        readMoreLink.className = "news-link";
        readMoreLink.href = readMoreUrl;
        readMoreLink.target = "_blank";
        readMoreLink.textContent = "Read More →";

        contentDiv.append(title, description, readMoreLink);
        card.append(badge, image, contentDiv);
        
        outputContainer.append(card);
    });
});
