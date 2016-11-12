namespace ETS2_Local_Radio_server
{
    partial class Setup
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Setup));
            this.step1Label = new System.Windows.Forms.Label();
            this.step2Label = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.installButton = new System.Windows.Forms.Button();
            this.skipButton = new System.Windows.Forms.Button();
            this.ets2folderDialog = new System.Windows.Forms.FolderBrowserDialog();
            this.SuspendLayout();
            // 
            // step1Label
            // 
            this.step1Label.Location = new System.Drawing.Point(12, 47);
            this.step1Label.Name = "step1Label";
            this.step1Label.Size = new System.Drawing.Size(326, 34);
            this.step1Label.TabIndex = 0;
            this.step1Label.Text = "Step 1: Copy the plugin to the ETS2 directory";
            this.step1Label.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // step2Label
            // 
            this.step2Label.Location = new System.Drawing.Point(12, 81);
            this.step2Label.Name = "step2Label";
            this.step2Label.Size = new System.Drawing.Size(326, 34);
            this.step2Label.TabIndex = 1;
            this.step2Label.Text = "Step 2: Add firewall rule";
            this.step2Label.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // label1
            // 
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(12, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(326, 38);
            this.label1.TabIndex = 2;
            this.label1.Text = "Setup";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // installButton
            // 
            this.installButton.Location = new System.Drawing.Point(240, 118);
            this.installButton.Name = "installButton";
            this.installButton.Size = new System.Drawing.Size(98, 30);
            this.installButton.TabIndex = 3;
            this.installButton.Text = "Install";
            this.installButton.UseVisualStyleBackColor = true;
            this.installButton.Click += new System.EventHandler(this.installButton_Click);
            // 
            // skipButton
            // 
            this.skipButton.Location = new System.Drawing.Point(136, 118);
            this.skipButton.Name = "skipButton";
            this.skipButton.Size = new System.Drawing.Size(98, 30);
            this.skipButton.TabIndex = 4;
            this.skipButton.Text = "Skip";
            this.skipButton.UseVisualStyleBackColor = true;
            this.skipButton.Click += new System.EventHandler(this.skipButton_Click);
            // 
            // ets2folderDialog
            // 
            this.ets2folderDialog.Description = "Select the folder where ETS2 is installed";
            this.ets2folderDialog.ShowNewFolderButton = false;
            // 
            // Setup
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(350, 157);
            this.Controls.Add(this.skipButton);
            this.Controls.Add(this.installButton);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.step2Label);
            this.Controls.Add(this.step1Label);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "Setup";
            this.Text = "ETS2 Local Radio setup";
            this.Load += new System.EventHandler(this.Setup_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Label step1Label;
        private System.Windows.Forms.Label step2Label;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button installButton;
        private System.Windows.Forms.Button skipButton;
        private System.Windows.Forms.FolderBrowserDialog ets2folderDialog;
    }
}