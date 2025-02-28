function addDownloadButtons() {
  console.log("addDownloadButtons");

  const versionTable = document.querySelector("table.version-history-table");
  if (!versionTable) {
    setTimeout(addDownloadButtons, 1000);
    return;
  }

  // 获取所有版本行
  const rows = versionTable.querySelectorAll(
    "tbody .version-history-container-row"
  );

  const urlParams = new URLSearchParams(window.location.search);
  const itemName = urlParams.get("itemName");
  const itemNameFieldA = itemName.split(".")[0];
  const itemNameFieldB = itemName.split(".")[1];
  console.log(itemName);

  rows.forEach((row) => {
    const middleCell = row.querySelectorAll(
      ".version-history-container-column"
    )[1];
    console.log(middleCell);
    if (!middleCell) return;

    const version = row
      .querySelector(".version-history-container-column")
      .textContent.trim();
    console.log(version);

    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Download";
    downloadBtn.style.cssText =
      "padding: 4px 12px; border-radius: 4px; border: 1px solid #0078d4; background: #0078d4; color: white; cursor: pointer;";
    downloadBtn.className = "download-btn";

    // 构建下载链接
    const downloadUrl = `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${itemNameFieldA}/vsextensions/${itemNameFieldB}/${version}/vspackage`;

    downloadBtn.onclick = () => {
      window.open(downloadUrl, "_blank");
    };

    // 将按钮添加到中间单元格中
    middleCell.appendChild(downloadBtn);
  });
}

addDownloadButtons();
