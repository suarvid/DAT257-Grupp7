export default class ActivityModel {
    constructor(activity, imageUrl, description, prerequisites, instructors, tags) {
        this.activity = activity
        this.imageUrl = imageUrl
        this.description = description
        this.prerequisites = prerequisites
        this.instructors = instructors
        this.tags = tags
    }
}