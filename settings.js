// ==========================================
// 【タスタス保育 設定ファイル】
// 
// 資料ダウンロードのURLなど、頻繁に変更される可能性のある項目をここで管理します。
// 値を変更する際は、ダブルクォーテーション（"）で囲んだままにしてください。
// ==========================================

const SITE_SETTINGS = {
  // ① ダウンロードできる資料のURL
  // 頻繁に資料が変わる場合は、ここを新しいPDFファイル等のURLやパスに変更してください。
  // 例: "./files/document_v2.pdf" や "https://example.com/shared/document.pdf"
  DOWNLOAD_FILE_URL: "./files/siryou.pdf",

  // ② ダウンロード時にお客様のパソコンに保存されるファイル名
  DOWNLOAD_FILE_NAME: "タスタス保育_サービス資料.pdf",

  // ③ 特典：ワーカー受け入れマニュアル作成ツールのURL
  BONUS_TOOL_URL: "https://tastas-to-worker-manual.pages.dev/"
};
