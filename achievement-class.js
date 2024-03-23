class Achievement {
    constructor(id, achievementUnlocked, title, description, content) {
        this.id = id
        this.achievementUnlocked = achievementUnlocked
        this.isCompleted = false
        this.title = title
        this.description = description
        this.content = content

        this.achievementColors = ["red", "green"]
        this.color = this.achievementColors[0]
    }

    updateModern() {
        if (!this.isCompleted) {
            this.isCompleted = this.achievementUnlocked
            if (this.isCompleted) {
                this.color = this.achievementColors[1]
                alert("ACHIEVEMENT UNLOCKED:" + this.title)
            }
        }
    }
}