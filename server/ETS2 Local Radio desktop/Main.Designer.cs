namespace ETS2_Local_Radio_server
{
    partial class Main
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Main));
            this.keyTimeout = new System.Windows.Forms.Timer(this.components);
            this.saveButton = new System.Windows.Forms.Button();
            this.nextKeyTextBox = new System.Windows.Forms.TextBox();
            this.previousKeyTextBox = new System.Windows.Forms.TextBox();
            this.stopKeyTextBox = new System.Windows.Forms.TextBox();
            this.groupSettings = new System.Windows.Forms.GroupBox();
            this.volumeDownKeyLabel = new System.Windows.Forms.Label();
            this.volumeUpKeyLabel = new System.Windows.Forms.Label();
            this.volumeDownKeyTextBox = new System.Windows.Forms.TextBox();
            this.volumeUpKeyTextBox = new System.Windows.Forms.TextBox();
            this.previousKeyLabel = new System.Windows.Forms.Label();
            this.stopKeyLabel = new System.Windows.Forms.Label();
            this.nextKeyLabel = new System.Windows.Forms.Label();
            this.groupInfo = new System.Windows.Forms.GroupBox();
            this.comboIP = new System.Windows.Forms.ComboBox();
            this.URLInfo = new System.Windows.Forms.Label();
            this.coordinatesInfo = new System.Windows.Forms.Label();
            this.locationLabel = new System.Windows.Forms.Label();
            this.statusInfo = new System.Windows.Forms.Label();
            this.statusLabel = new System.Windows.Forms.Label();
            this.URLLabel = new System.Windows.Forms.LinkLabel();
            this.Koenvh = new System.Windows.Forms.PictureBox();
            this.comboLang = new System.Windows.Forms.ComboBox();
            this.groupSettings.SuspendLayout();
            this.groupInfo.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.Koenvh)).BeginInit();
            this.SuspendLayout();
            // 
            // keyTimeout
            // 
            this.keyTimeout.Interval = 500;
            this.keyTimeout.Tick += new System.EventHandler(this.keyTimeout_Tick);
            // 
            // saveButton
            // 
            this.saveButton.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.saveButton.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.saveButton.Location = new System.Drawing.Point(300, 148);
            this.saveButton.Name = "saveButton";
            this.saveButton.Size = new System.Drawing.Size(105, 34);
            this.saveButton.TabIndex = 0;
            this.saveButton.Text = "Save";
            this.saveButton.UseVisualStyleBackColor = true;
            this.saveButton.Click += new System.EventHandler(this.saveButton_Click);
            // 
            // nextKeyTextBox
            // 
            this.nextKeyTextBox.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.nextKeyTextBox.Location = new System.Drawing.Point(340, 17);
            this.nextKeyTextBox.Name = "nextKeyTextBox";
            this.nextKeyTextBox.Size = new System.Drawing.Size(65, 22);
            this.nextKeyTextBox.TabIndex = 1;
            this.nextKeyTextBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.nextKeyTextBox_KeyDown);
            // 
            // previousKeyTextBox
            // 
            this.previousKeyTextBox.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.previousKeyTextBox.Location = new System.Drawing.Point(340, 43);
            this.previousKeyTextBox.Name = "previousKeyTextBox";
            this.previousKeyTextBox.Size = new System.Drawing.Size(65, 22);
            this.previousKeyTextBox.TabIndex = 2;
            this.previousKeyTextBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.previousKeyTextBox_KeyDown);
            // 
            // stopKeyTextBox
            // 
            this.stopKeyTextBox.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.stopKeyTextBox.Location = new System.Drawing.Point(340, 69);
            this.stopKeyTextBox.Name = "stopKeyTextBox";
            this.stopKeyTextBox.Size = new System.Drawing.Size(65, 22);
            this.stopKeyTextBox.TabIndex = 3;
            this.stopKeyTextBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.stopKeyTextBox_KeyDown);
            // 
            // groupSettings
            // 
            this.groupSettings.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.groupSettings.Controls.Add(this.volumeDownKeyLabel);
            this.groupSettings.Controls.Add(this.volumeUpKeyLabel);
            this.groupSettings.Controls.Add(this.volumeDownKeyTextBox);
            this.groupSettings.Controls.Add(this.volumeUpKeyTextBox);
            this.groupSettings.Controls.Add(this.previousKeyLabel);
            this.groupSettings.Controls.Add(this.stopKeyLabel);
            this.groupSettings.Controls.Add(this.nextKeyLabel);
            this.groupSettings.Controls.Add(this.stopKeyTextBox);
            this.groupSettings.Controls.Add(this.saveButton);
            this.groupSettings.Controls.Add(this.previousKeyTextBox);
            this.groupSettings.Controls.Add(this.nextKeyTextBox);
            this.groupSettings.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.groupSettings.Location = new System.Drawing.Point(12, 135);
            this.groupSettings.Name = "groupSettings";
            this.groupSettings.Size = new System.Drawing.Size(413, 188);
            this.groupSettings.TabIndex = 4;
            this.groupSettings.TabStop = false;
            this.groupSettings.Text = "Settings";
            // 
            // volumeDownKeyLabel
            // 
            this.volumeDownKeyLabel.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.volumeDownKeyLabel.Location = new System.Drawing.Point(6, 121);
            this.volumeDownKeyLabel.Name = "volumeDownKeyLabel";
            this.volumeDownKeyLabel.Size = new System.Drawing.Size(331, 20);
            this.volumeDownKeyLabel.TabIndex = 11;
            this.volumeDownKeyLabel.Text = "Volume down key:";
            this.volumeDownKeyLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // volumeUpKeyLabel
            // 
            this.volumeUpKeyLabel.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.volumeUpKeyLabel.Location = new System.Drawing.Point(6, 95);
            this.volumeUpKeyLabel.Name = "volumeUpKeyLabel";
            this.volumeUpKeyLabel.Size = new System.Drawing.Size(331, 20);
            this.volumeUpKeyLabel.TabIndex = 10;
            this.volumeUpKeyLabel.Text = "Volume up key:";
            this.volumeUpKeyLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // volumeDownKeyTextBox
            // 
            this.volumeDownKeyTextBox.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.volumeDownKeyTextBox.Location = new System.Drawing.Point(340, 121);
            this.volumeDownKeyTextBox.Name = "volumeDownKeyTextBox";
            this.volumeDownKeyTextBox.Size = new System.Drawing.Size(65, 22);
            this.volumeDownKeyTextBox.TabIndex = 9;
            this.volumeDownKeyTextBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.volumeDownKeyTextBox_KeyDown);
            // 
            // volumeUpKeyTextBox
            // 
            this.volumeUpKeyTextBox.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.volumeUpKeyTextBox.Location = new System.Drawing.Point(340, 95);
            this.volumeUpKeyTextBox.Name = "volumeUpKeyTextBox";
            this.volumeUpKeyTextBox.Size = new System.Drawing.Size(65, 22);
            this.volumeUpKeyTextBox.TabIndex = 8;
            this.volumeUpKeyTextBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.volumeUpKeyTextBox_KeyDown);
            // 
            // previousKeyLabel
            // 
            this.previousKeyLabel.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.previousKeyLabel.Location = new System.Drawing.Point(6, 43);
            this.previousKeyLabel.Name = "previousKeyLabel";
            this.previousKeyLabel.Size = new System.Drawing.Size(331, 20);
            this.previousKeyLabel.TabIndex = 5;
            this.previousKeyLabel.Text = "Previous station key:";
            this.previousKeyLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // stopKeyLabel
            // 
            this.stopKeyLabel.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.stopKeyLabel.Location = new System.Drawing.Point(6, 69);
            this.stopKeyLabel.Name = "stopKeyLabel";
            this.stopKeyLabel.Size = new System.Drawing.Size(331, 20);
            this.stopKeyLabel.TabIndex = 5;
            this.stopKeyLabel.Text = "Stop playback key:";
            this.stopKeyLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // nextKeyLabel
            // 
            this.nextKeyLabel.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.nextKeyLabel.Location = new System.Drawing.Point(6, 17);
            this.nextKeyLabel.Name = "nextKeyLabel";
            this.nextKeyLabel.Size = new System.Drawing.Size(331, 20);
            this.nextKeyLabel.TabIndex = 4;
            this.nextKeyLabel.Text = "Next station key:";
            this.nextKeyLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // groupInfo
            // 
            this.groupInfo.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.groupInfo.Controls.Add(this.comboIP);
            this.groupInfo.Controls.Add(this.URLInfo);
            this.groupInfo.Controls.Add(this.coordinatesInfo);
            this.groupInfo.Controls.Add(this.locationLabel);
            this.groupInfo.Controls.Add(this.statusInfo);
            this.groupInfo.Controls.Add(this.statusLabel);
            this.groupInfo.Controls.Add(this.URLLabel);
            this.groupInfo.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.groupInfo.Location = new System.Drawing.Point(12, 12);
            this.groupInfo.Name = "groupInfo";
            this.groupInfo.Size = new System.Drawing.Size(413, 117);
            this.groupInfo.TabIndex = 5;
            this.groupInfo.TabStop = false;
            this.groupInfo.Text = "Info";
            // 
            // comboIP
            // 
            this.comboIP.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboIP.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.comboIP.FormattingEnabled = true;
            this.comboIP.Location = new System.Drawing.Point(94, 62);
            this.comboIP.Name = "comboIP";
            this.comboIP.Size = new System.Drawing.Size(310, 21);
            this.comboIP.TabIndex = 11;
            // 
            // URLInfo
            // 
            this.URLInfo.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.URLInfo.Location = new System.Drawing.Point(6, 60);
            this.URLInfo.Name = "URLInfo";
            this.URLInfo.Size = new System.Drawing.Size(82, 22);
            this.URLInfo.TabIndex = 10;
            this.URLInfo.Text = "URL:";
            this.URLInfo.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // coordinatesInfo
            // 
            this.coordinatesInfo.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.coordinatesInfo.Location = new System.Drawing.Point(6, 38);
            this.coordinatesInfo.Name = "coordinatesInfo";
            this.coordinatesInfo.Size = new System.Drawing.Size(82, 22);
            this.coordinatesInfo.TabIndex = 9;
            this.coordinatesInfo.Text = "Coordinates:";
            this.coordinatesInfo.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // locationLabel
            // 
            this.locationLabel.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.locationLabel.Location = new System.Drawing.Point(94, 38);
            this.locationLabel.Name = "locationLabel";
            this.locationLabel.Size = new System.Drawing.Size(310, 22);
            this.locationLabel.TabIndex = 6;
            this.locationLabel.Text = "XYZ";
            this.locationLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // statusInfo
            // 
            this.statusInfo.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.statusInfo.Location = new System.Drawing.Point(6, 16);
            this.statusInfo.Name = "statusInfo";
            this.statusInfo.Size = new System.Drawing.Size(82, 22);
            this.statusInfo.TabIndex = 8;
            this.statusInfo.Text = "Status:";
            this.statusInfo.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // statusLabel
            // 
            this.statusLabel.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.statusLabel.Location = new System.Drawing.Point(94, 16);
            this.statusLabel.Name = "statusLabel";
            this.statusLabel.Size = new System.Drawing.Size(313, 22);
            this.statusLabel.TabIndex = 7;
            this.statusLabel.Text = "status";
            this.statusLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // URLLabel
            // 
            this.URLLabel.Font = new System.Drawing.Font("Segoe UI", 8.25F);
            this.URLLabel.Location = new System.Drawing.Point(91, 86);
            this.URLLabel.Name = "URLLabel";
            this.URLLabel.Size = new System.Drawing.Size(313, 21);
            this.URLLabel.TabIndex = 6;
            this.URLLabel.TabStop = true;
            this.URLLabel.Text = "Open ETS2 Local Radio";
            this.URLLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            this.URLLabel.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.URLLabel_LinkClicked);
            // 
            // Koenvh
            // 
            this.Koenvh.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.Koenvh.Cursor = System.Windows.Forms.Cursors.Hand;
            this.Koenvh.Image = global::ETS2_Local_Radio_server.Properties.Resources.Koenvh_fat_text_smaller;
            this.Koenvh.Location = new System.Drawing.Point(140, 340);
            this.Koenvh.Name = "Koenvh";
            this.Koenvh.Size = new System.Drawing.Size(156, 50);
            this.Koenvh.TabIndex = 6;
            this.Koenvh.TabStop = false;
            this.Koenvh.Click += new System.EventHandler(this.Koenvh_Click);
            // 
            // comboLang
            // 
            this.comboLang.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.comboLang.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.comboLang.Font = new System.Drawing.Font("Segoe UI", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.comboLang.FormattingEnabled = true;
            this.comboLang.Location = new System.Drawing.Point(360, 369);
            this.comboLang.Name = "comboLang";
            this.comboLang.Size = new System.Drawing.Size(65, 21);
            this.comboLang.TabIndex = 8;
            this.comboLang.SelectedIndexChanged += new System.EventHandler(this.comboLang_SelectedIndexChanged);
            // 
            // Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(437, 400);
            this.Controls.Add(this.comboLang);
            this.Controls.Add(this.Koenvh);
            this.Controls.Add(this.groupInfo);
            this.Controls.Add(this.groupSettings);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "Main";
            this.Text = "ETS2 Local Radio server";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Main_FormClosing);
            this.Load += new System.EventHandler(this.Main_Load);
            this.groupSettings.ResumeLayout(false);
            this.groupSettings.PerformLayout();
            this.groupInfo.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.Koenvh)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.Timer keyTimeout;
        private System.Windows.Forms.Button saveButton;
        private System.Windows.Forms.TextBox nextKeyTextBox;
        private System.Windows.Forms.TextBox previousKeyTextBox;
        private System.Windows.Forms.TextBox stopKeyTextBox;
        private System.Windows.Forms.GroupBox groupSettings;
        private System.Windows.Forms.Label previousKeyLabel;
        private System.Windows.Forms.Label stopKeyLabel;
        private System.Windows.Forms.Label nextKeyLabel;
        private System.Windows.Forms.GroupBox groupInfo;
        private System.Windows.Forms.LinkLabel URLLabel;
        private System.Windows.Forms.Label volumeDownKeyLabel;
        private System.Windows.Forms.Label volumeUpKeyLabel;
        private System.Windows.Forms.TextBox volumeDownKeyTextBox;
        private System.Windows.Forms.TextBox volumeUpKeyTextBox;
        private System.Windows.Forms.Label locationLabel;
        private System.Windows.Forms.Label statusLabel;
        private System.Windows.Forms.Label statusInfo;
        private System.Windows.Forms.Label coordinatesInfo;
        private System.Windows.Forms.PictureBox Koenvh;
        private System.Windows.Forms.Label URLInfo;
        private System.Windows.Forms.ComboBox comboIP;
        private System.Windows.Forms.ComboBox comboLang;
    }
}