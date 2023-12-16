export function toggleDescDialog(e) {
  const targetDescDialog = document.getElementById("descDialog");
  const targetDescDialogButton = document.getElementById("descDialogButton");
  const targetCloseDescDialogButton = document.getElementById(
    "closeDescDialogButton"
  );

  const rect = targetDescDialog.getBoundingClientRect();

  const isInDialog =
    rect.top <= e.clientY &&
    e.clientY <= rect.top + rect.height &&
    rect.left <= e.clientX &&
    e.clientX <= rect.left + rect.width;

  if (!targetDescDialog.open && e.target === targetDescDialogButton) {
    targetDescDialog.showModal();
  } else if (
    targetDescDialog.open &&
    e.target === targetCloseDescDialogButton
  ) {
    targetDescDialog.close();
  } else if (targetDescDialog.open && !isInDialog) {
    targetDescDialog.close();
  }
}
