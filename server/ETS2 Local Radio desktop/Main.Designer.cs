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
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.volumeDownKeyLabel = new System.Windows.Forms.Label();
            this.volumeUpKeyLabel = new System.Windows.Forms.Label();
            this.volumeDownKeyTextBox = new System.Windows.Forms.TextBox();
            this.volumeUpKeyTextBox = new System.Windows.Forms.TextBox();
            this.previousKeyLabel = new System.Windows.Forms.Label();
            this.stopKeyLabel = new System.Windows.Forms.Label();
            this.nextKeyLabel = new System.Windows.Forms.Label();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.locationLabel = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.statusLabel = new System.Windows.Forms.Label();
            this.URLLabel = new System.Windows.Forms.LinkLabel();
            this.errorLabel = new System.Windows.Forms.Label();
            this.Koenvh = new System.Windows.Forms.PictureBox();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
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
            this.saveButton.Location = new System.Drawing.Point(333, 89);
            this.saveButton.Name = "saveButton";
            this.saveButton.Size = new System.Drawing.Size(105, 34);
            this.saveButton.TabIndex = 0;
            this.saveButton.Text = "Save";
            this.saveButton.UseVisualStyleBackColor = true;
            this.saveButton.Click += new System.EventHandler(this.saveButton_Click);
            // 
            // nextKeyTextBox
            // 
            this.nextKeyTextBox.Location = new System.Drawing.Point(136, 16);
            this.nextKeyTextBox.Name = "nextKeyTextBox";
            this.nextKeyTextBox.Size = new System.Drawing.Size(83, 20);
            this.nextKeyTextBox.TabIndex = 1;
            this.nextKeyTextBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.nextKeyTextBox_KeyDown);
            // 
            // previousKeyTextBox
            // 
            this.previousKeyTextBox.Location = new System.Drawing.Point(136, 42);
            this.previousKeyTextBox.Name = "previousKeyTextBox";
            this.previousKeyTextBox.Size = new System.Drawing.Size(83, 20);
            this.previousKeyTextBox.TabIndex = 2;
            this.previousKeyTextBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.previousKeyTextBox_KeyDown);
            // 
            // stopKeyTextBox
            // 
            this.stopKeyTextBox.Location = new System.Drawing.Point(136, 68);
            this.stopKeyTextBox.Name = "stopKeyTextBox";
            this.stopKeyTextBox.Size = new System.Drawing.Size(83, 20);
            this.stopKeyTextBox.TabIndex = 3;
            this.stopKeyTextBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.stopKeyTextBox_KeyDown);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.volumeDownKeyLabel);
            this.groupBox1.Controls.Add(this.volumeUpKeyLabel);
            this.groupBox1.Controls.Add(this.volumeDownKeyTextBox);
            this.groupBox1.Controls.Add(this.volumeUpKeyTextBox);
            this.groupBox1.Controls.Add(this.previousKeyLabel);
            this.groupBox1.Controls.Add(this.stopKeyLabel);
            this.groupBox1.Controls.Add(this.nextKeyLabel);
            this.groupBox1.Controls.Add(this.stopKeyTextBox);
            this.groupBox1.Controls.Add(this.saveButton);
            this.groupBox1.Controls.Add(this.previousKeyTextBox);
            this.groupBox1.Controls.Add(this.nextKeyTextBox);
            this.groupBox1.Location = new System.Drawing.Point(12, 117);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(444, 129);
            this.groupBox1.TabIndex = 4;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Settings";
            // 
            // volumeDownKeyLabel
            // 
            this.volumeDownKeyLabel.Location = new System.Drawing.Point(225, 42);
            this.volumeDownKeyLabel.Name = "volumeDownKeyLabel";
            this.volumeDownKeyLabel.Size = new System.Drawing.Size(124, 20);
            this.volumeDownKeyLabel.TabIndex = 11;
            this.volumeDownKeyLabel.Text = "Volume down key:";
            this.volumeDownKeyLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // volumeUpKeyLabel
            // 
            this.volumeUpKeyLabel.Location = new System.Drawing.Point(225, 16);
            this.volumeUpKeyLabel.Name = "volumeUpKeyLabel";
            this.volumeUpKeyLabel.Size = new System.Drawing.Size(124, 20);
            this.volumeUpKeyLabel.TabIndex = 10;
            this.volumeUpKeyLabel.Text = "Volume up key:";
            this.volumeUpKeyLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // volumeDownKeyTextBox
            // 
            this.volumeDownKeyTextBox.Location = new System.Drawing.Point(355, 42);
            this.volumeDownKeyTextBox.Name = "volumeDownKeyTextBox";
            this.volumeDownKeyTextBox.Size = new System.Drawing.Size(83, 20);
            this.volumeDownKeyTextBox.TabIndex = 9;
            this.volumeDownKeyTextBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.volumeDownKeyTextBox_KeyDown);
            // 
            // volumeUpKeyTextBox
            // 
            this.volumeUpKeyTextBox.Location = new System.Drawing.Point(355, 16);
            this.volumeUpKeyTextBox.Name = "volumeUpKeyTextBox";
            this.volumeUpKeyTextBox.Size = new System.Drawing.Size(83, 20);
            this.volumeUpKeyTextBox.TabIndex = 8;
            this.volumeUpKeyTextBox.KeyDown += new System.Windows.Forms.KeyEventHandler(this.volumeUpKeyTextBox_KeyDown);
            // 
            // previousKeyLabel
            // 
            this.previousKeyLabel.Location = new System.Drawing.Point(6, 42);
            this.previousKeyLabel.Name = "previousKeyLabel";
            this.previousKeyLabel.Size = new System.Drawing.Size(124, 20);
            this.previousKeyLabel.TabIndex = 5;
            this.previousKeyLabel.Text = "Previous station key:";
            this.previousKeyLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // stopKeyLabel
            // 
            this.stopKeyLabel.Location = new System.Drawing.Point(6, 68);
            this.stopKeyLabel.Name = "stopKeyLabel";
            this.stopKeyLabel.Size = new System.Drawing.Size(124, 20);
            this.stopKeyLabel.TabIndex = 5;
            this.stopKeyLabel.Text = "Stop playback key:";
            this.stopKeyLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // nextKeyLabel
            // 
            this.nextKeyLabel.Location = new System.Drawing.Point(6, 16);
            this.nextKeyLabel.Name = "nextKeyLabel";
            this.nextKeyLabel.Size = new System.Drawing.Size(124, 20);
            this.nextKeyLabel.TabIndex = 4;
            this.nextKeyLabel.Text = "Next station key:";
            this.nextKeyLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.label3);
            this.groupBox2.Controls.Add(this.label2);
            this.groupBox2.Controls.Add(this.locationLabel);
            this.groupBox2.Controls.Add(this.label1);
            this.groupBox2.Controls.Add(this.statusLabel);
            this.groupBox2.Controls.Add(this.URLLabel);
            this.groupBox2.Controls.Add(this.errorLabel);
            this.groupBox2.Location = new System.Drawing.Point(12, 12);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(444, 99);
            this.groupBox2.TabIndex = 5;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "Info";
            // 
            // label3
            // 
            this.label3.Location = new System.Drawing.Point(6, 60);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(82, 22);
            this.label3.TabIndex = 10;
            this.label3.Text = "Latest error:";
            this.label3.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // label2
            // 
            this.label2.Location = new System.Drawing.Point(6, 38);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(82, 22);
            this.label2.TabIndex = 9;
            this.label2.Text = "Coordinates:";
            this.label2.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // locationLabel
            // 
            this.locationLabel.Location = new System.Drawing.Point(94, 38);
            this.locationLabel.Name = "locationLabel";
            this.locationLabel.Size = new System.Drawing.Size(341, 22);
            this.locationLabel.TabIndex = 6;
            this.locationLabel.Text = "XYZ";
            this.locationLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // label1
            // 
            this.label1.Location = new System.Drawing.Point(6, 16);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(82, 22);
            this.label1.TabIndex = 8;
            this.label1.Text = "Status:";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // statusLabel
            // 
            this.statusLabel.Location = new System.Drawing.Point(94, 16);
            this.statusLabel.Name = "statusLabel";
            this.statusLabel.Size = new System.Drawing.Size(344, 22);
            this.statusLabel.TabIndex = 7;
            this.statusLabel.Text = "status";
            this.statusLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // URLLabel
            // 
            this.URLLabel.Location = new System.Drawing.Point(309, 76);
            this.URLLabel.Name = "URLLabel";
            this.URLLabel.Size = new System.Drawing.Size(129, 16);
            this.URLLabel.TabIndex = 6;
            this.URLLabel.TabStop = true;
            this.URLLabel.Text = "Open ETS2 Local Radio";
            this.URLLabel.TextAlign = System.Drawing.ContentAlignment.BottomRight;
            this.URLLabel.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.URLLabel_LinkClicked);
            // 
            // errorLabel
            // 
            this.errorLabel.Location = new System.Drawing.Point(94, 60);
            this.errorLabel.Name = "errorLabel";
            this.errorLabel.Size = new System.Drawing.Size(209, 22);
            this.errorLabel.TabIndex = 11;
            this.errorLabel.Text = "None";
            this.errorLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // Koenvh
            // 
            this.Koenvh.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.Koenvh.Cursor = System.Windows.Forms.Cursors.Hand;
            this.Koenvh.Image = global::ETS2_Local_Radio_server.Properties.Resources.Koenvh_fat_text_smaller;
            this.Koenvh.Location = new System.Drawing.Point(156, 252);
            this.Koenvh.Name = "Koenvh";
            this.Koenvh.Size = new System.Drawing.Size(156, 50);
            this.Koenvh.TabIndex = 6;
            this.Koenvh.TabStop = false;
            this.Koenvh.Click += new System.EventHandler(this.Koenvh_Click);
            // 
            // Main
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(468, 312);
            this.Controls.Add(this.Koenvh);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "Main";
            this.Text = "ETS2 Local Radio server";
            this.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.Main_FormClosing);
            this.Load += new System.EventHandler(this.Main_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.Koenvh)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.Timer keyTimeout;
        private System.Windows.Forms.Button saveButton;
        private System.Windows.Forms.TextBox nextKeyTextBox;
        private System.Windows.Forms.TextBox previousKeyTextBox;
        private System.Windows.Forms.TextBox stopKeyTextBox;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Label previousKeyLabel;
        private System.Windows.Forms.Label stopKeyLabel;
        private System.Windows.Forms.Label nextKeyLabel;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.LinkLabel URLLabel;
        private System.Windows.Forms.Label volumeDownKeyLabel;
        private System.Windows.Forms.Label volumeUpKeyLabel;
        private System.Windows.Forms.TextBox volumeDownKeyTextBox;
        private System.Windows.Forms.TextBox volumeUpKeyTextBox;
        private System.Windows.Forms.Label locationLabel;
        private System.Windows.Forms.Label statusLabel;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.PictureBox Koenvh;
        private System.Windows.Forms.Label errorLabel;
        private System.Windows.Forms.Label label3;
    }
}