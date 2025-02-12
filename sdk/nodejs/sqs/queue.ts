// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const queue = new aws.sqs.Queue("queue", {
 *     delaySeconds: 90,
 *     maxMessageSize: 2048,
 *     messageRetentionSeconds: 86400,
 *     receiveWaitTimeSeconds: 10,
 *     redrivePolicy: JSON.stringify({
 *         deadLetterTargetArn: aws_sqs_queue.queue_deadletter.arn,
 *         maxReceiveCount: 4,
 *     }),
 *     tags: {
 *         Environment: "production",
 *     },
 * });
 * ```
 * ## FIFO queue
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const queue = new aws.sqs.Queue("queue", {
 *     contentBasedDeduplication: true,
 *     fifoQueue: true,
 * });
 * ```
 *
 * ## High-throughput FIFO queue
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const terraformQueue = new aws.sqs.Queue("terraform_queue", {
 *     deduplicationScope: "messageGroup",
 *     fifoQueue: true,
 *     fifoThroughputLimit: "perMessageGroupId",
 * });
 * ```
 *
 * ## Server-side encryption (SSE)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const queue = new aws.sqs.Queue("queue", {
 *     kmsDataKeyReusePeriodSeconds: 300,
 *     kmsMasterKeyId: "alias/aws/sqs",
 * });
 * ```
 *
 * ## Import
 *
 * SQS Queues can be imported using the `queue url`, e.g.
 *
 * ```sh
 *  $ pulumi import aws:sqs/queue:Queue public_queue https://queue.amazonaws.com/80398EXAMPLE/MyQueue
 * ```
 */
export class Queue extends pulumi.CustomResource {
    /**
     * Get an existing Queue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QueueState, opts?: pulumi.CustomResourceOptions): Queue {
        return new Queue(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:sqs/queue:Queue';

    /**
     * Returns true if the given object is an instance of Queue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Queue {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Queue.__pulumiType;
    }

    /**
     * The ARN of the SQS queue
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Enables content-based deduplication for FIFO queues. For more information, see the [related documentation](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing)
     */
    public readonly contentBasedDeduplication!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether message deduplication occurs at the message group or queue level. Valid values are `messageGroup` and `queue` (default).
     */
    public readonly deduplicationScope!: pulumi.Output<string>;
    /**
     * The time in seconds that the delivery of all messages in the queue will be delayed. An integer from 0 to 900 (15 minutes). The default for this attribute is 0 seconds.
     */
    public readonly delaySeconds!: pulumi.Output<number | undefined>;
    /**
     * Boolean designating a FIFO queue. If not set, it defaults to `false` making it standard.
     */
    public readonly fifoQueue!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are `perQueue` (default) and `perMessageGroupId`.
     */
    public readonly fifoThroughputLimit!: pulumi.Output<string>;
    /**
     * The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). The default is 300 (5 minutes).
     */
    public readonly kmsDataKeyReusePeriodSeconds!: pulumi.Output<number>;
    /**
     * The ID of an AWS-managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see [Key Terms](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms).
     */
    public readonly kmsMasterKeyId!: pulumi.Output<string | undefined>;
    /**
     * The limit of how many bytes a message can contain before Amazon SQS rejects it. An integer from 1024 bytes (1 KiB) up to 262144 bytes (256 KiB). The default for this attribute is 262144 (256 KiB).
     */
    public readonly maxMessageSize!: pulumi.Output<number | undefined>;
    /**
     * The number of seconds Amazon SQS retains a message. Integer representing seconds, from 60 (1 minute) to 1209600 (14 days). The default for this attribute is 345600 (4 days).
     */
    public readonly messageRetentionSeconds!: pulumi.Output<number | undefined>;
    /**
     * The name of the queue. Queue names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 80 characters long. For a FIFO (first-in-first-out) queue, the name must end with the `.fifo` suffix. If omitted, this provider will assign a random, unique name. Conflicts with `namePrefix`
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`
     */
    public readonly namePrefix!: pulumi.Output<string>;
    /**
     * The JSON policy for the SQS queue.
     */
    public readonly policy!: pulumi.Output<string>;
    /**
     * The time for which a ReceiveMessage call will wait for a message to arrive (long polling) before returning. An integer from 0 to 20 (seconds). The default for this attribute is 0, meaning that the call will return immediately.
     */
    public readonly receiveWaitTimeSeconds!: pulumi.Output<number | undefined>;
    /**
     * The JSON policy to set up the Dead Letter Queue, see [AWS docs](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSDeadLetterQueue.html). **Note:** when specifying `maxReceiveCount`, you must specify it as an integer (`5`), and not a string (`"5"`).
     */
    public readonly redrivePolicy!: pulumi.Output<string | undefined>;
    /**
     * A map of tags to assign to the queue. If configured with a provider `defaultTags` configuration block) present, tags with matching keys will overwrite those defined at the provider-level.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A map of tags assigned to the resource, including those inherited from the provider.
     */
    public /*out*/ readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    /**
     * Same as `id`: The URL for the created Amazon SQS queue.
     */
    public /*out*/ readonly url!: pulumi.Output<string>;
    /**
     * The visibility timeout for the queue. An integer from 0 to 43200 (12 hours). The default for this attribute is 30. For more information about visibility timeout, see [AWS docs](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html).
     */
    public readonly visibilityTimeoutSeconds!: pulumi.Output<number | undefined>;

    /**
     * Create a Queue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: QueueArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: QueueArgs | QueueState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as QueueState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["contentBasedDeduplication"] = state ? state.contentBasedDeduplication : undefined;
            inputs["deduplicationScope"] = state ? state.deduplicationScope : undefined;
            inputs["delaySeconds"] = state ? state.delaySeconds : undefined;
            inputs["fifoQueue"] = state ? state.fifoQueue : undefined;
            inputs["fifoThroughputLimit"] = state ? state.fifoThroughputLimit : undefined;
            inputs["kmsDataKeyReusePeriodSeconds"] = state ? state.kmsDataKeyReusePeriodSeconds : undefined;
            inputs["kmsMasterKeyId"] = state ? state.kmsMasterKeyId : undefined;
            inputs["maxMessageSize"] = state ? state.maxMessageSize : undefined;
            inputs["messageRetentionSeconds"] = state ? state.messageRetentionSeconds : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
            inputs["policy"] = state ? state.policy : undefined;
            inputs["receiveWaitTimeSeconds"] = state ? state.receiveWaitTimeSeconds : undefined;
            inputs["redrivePolicy"] = state ? state.redrivePolicy : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tagsAll"] = state ? state.tagsAll : undefined;
            inputs["url"] = state ? state.url : undefined;
            inputs["visibilityTimeoutSeconds"] = state ? state.visibilityTimeoutSeconds : undefined;
        } else {
            const args = argsOrState as QueueArgs | undefined;
            inputs["contentBasedDeduplication"] = args ? args.contentBasedDeduplication : undefined;
            inputs["deduplicationScope"] = args ? args.deduplicationScope : undefined;
            inputs["delaySeconds"] = args ? args.delaySeconds : undefined;
            inputs["fifoQueue"] = args ? args.fifoQueue : undefined;
            inputs["fifoThroughputLimit"] = args ? args.fifoThroughputLimit : undefined;
            inputs["kmsDataKeyReusePeriodSeconds"] = args ? args.kmsDataKeyReusePeriodSeconds : undefined;
            inputs["kmsMasterKeyId"] = args ? args.kmsMasterKeyId : undefined;
            inputs["maxMessageSize"] = args ? args.maxMessageSize : undefined;
            inputs["messageRetentionSeconds"] = args ? args.messageRetentionSeconds : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["policy"] = args ? args.policy : undefined;
            inputs["receiveWaitTimeSeconds"] = args ? args.receiveWaitTimeSeconds : undefined;
            inputs["redrivePolicy"] = args ? args.redrivePolicy : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["visibilityTimeoutSeconds"] = args ? args.visibilityTimeoutSeconds : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["tagsAll"] = undefined /*out*/;
            inputs["url"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(Queue.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Queue resources.
 */
export interface QueueState {
    /**
     * The ARN of the SQS queue
     */
    arn?: pulumi.Input<string>;
    /**
     * Enables content-based deduplication for FIFO queues. For more information, see the [related documentation](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing)
     */
    contentBasedDeduplication?: pulumi.Input<boolean>;
    /**
     * Specifies whether message deduplication occurs at the message group or queue level. Valid values are `messageGroup` and `queue` (default).
     */
    deduplicationScope?: pulumi.Input<string>;
    /**
     * The time in seconds that the delivery of all messages in the queue will be delayed. An integer from 0 to 900 (15 minutes). The default for this attribute is 0 seconds.
     */
    delaySeconds?: pulumi.Input<number>;
    /**
     * Boolean designating a FIFO queue. If not set, it defaults to `false` making it standard.
     */
    fifoQueue?: pulumi.Input<boolean>;
    /**
     * Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are `perQueue` (default) and `perMessageGroupId`.
     */
    fifoThroughputLimit?: pulumi.Input<string>;
    /**
     * The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). The default is 300 (5 minutes).
     */
    kmsDataKeyReusePeriodSeconds?: pulumi.Input<number>;
    /**
     * The ID of an AWS-managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see [Key Terms](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms).
     */
    kmsMasterKeyId?: pulumi.Input<string>;
    /**
     * The limit of how many bytes a message can contain before Amazon SQS rejects it. An integer from 1024 bytes (1 KiB) up to 262144 bytes (256 KiB). The default for this attribute is 262144 (256 KiB).
     */
    maxMessageSize?: pulumi.Input<number>;
    /**
     * The number of seconds Amazon SQS retains a message. Integer representing seconds, from 60 (1 minute) to 1209600 (14 days). The default for this attribute is 345600 (4 days).
     */
    messageRetentionSeconds?: pulumi.Input<number>;
    /**
     * The name of the queue. Queue names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 80 characters long. For a FIFO (first-in-first-out) queue, the name must end with the `.fifo` suffix. If omitted, this provider will assign a random, unique name. Conflicts with `namePrefix`
     */
    name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * The JSON policy for the SQS queue.
     */
    policy?: pulumi.Input<string>;
    /**
     * The time for which a ReceiveMessage call will wait for a message to arrive (long polling) before returning. An integer from 0 to 20 (seconds). The default for this attribute is 0, meaning that the call will return immediately.
     */
    receiveWaitTimeSeconds?: pulumi.Input<number>;
    /**
     * The JSON policy to set up the Dead Letter Queue, see [AWS docs](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSDeadLetterQueue.html). **Note:** when specifying `maxReceiveCount`, you must specify it as an integer (`5`), and not a string (`"5"`).
     */
    redrivePolicy?: pulumi.Input<string>;
    /**
     * A map of tags to assign to the queue. If configured with a provider `defaultTags` configuration block) present, tags with matching keys will overwrite those defined at the provider-level.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A map of tags assigned to the resource, including those inherited from the provider.
     */
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Same as `id`: The URL for the created Amazon SQS queue.
     */
    url?: pulumi.Input<string>;
    /**
     * The visibility timeout for the queue. An integer from 0 to 43200 (12 hours). The default for this attribute is 30. For more information about visibility timeout, see [AWS docs](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html).
     */
    visibilityTimeoutSeconds?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Queue resource.
 */
export interface QueueArgs {
    /**
     * Enables content-based deduplication for FIFO queues. For more information, see the [related documentation](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-exactly-once-processing)
     */
    contentBasedDeduplication?: pulumi.Input<boolean>;
    /**
     * Specifies whether message deduplication occurs at the message group or queue level. Valid values are `messageGroup` and `queue` (default).
     */
    deduplicationScope?: pulumi.Input<string>;
    /**
     * The time in seconds that the delivery of all messages in the queue will be delayed. An integer from 0 to 900 (15 minutes). The default for this attribute is 0 seconds.
     */
    delaySeconds?: pulumi.Input<number>;
    /**
     * Boolean designating a FIFO queue. If not set, it defaults to `false` making it standard.
     */
    fifoQueue?: pulumi.Input<boolean>;
    /**
     * Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are `perQueue` (default) and `perMessageGroupId`.
     */
    fifoThroughputLimit?: pulumi.Input<string>;
    /**
     * The length of time, in seconds, for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again. An integer representing seconds, between 60 seconds (1 minute) and 86,400 seconds (24 hours). The default is 300 (5 minutes).
     */
    kmsDataKeyReusePeriodSeconds?: pulumi.Input<number>;
    /**
     * The ID of an AWS-managed customer master key (CMK) for Amazon SQS or a custom CMK. For more information, see [Key Terms](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-server-side-encryption.html#sqs-sse-key-terms).
     */
    kmsMasterKeyId?: pulumi.Input<string>;
    /**
     * The limit of how many bytes a message can contain before Amazon SQS rejects it. An integer from 1024 bytes (1 KiB) up to 262144 bytes (256 KiB). The default for this attribute is 262144 (256 KiB).
     */
    maxMessageSize?: pulumi.Input<number>;
    /**
     * The number of seconds Amazon SQS retains a message. Integer representing seconds, from 60 (1 minute) to 1209600 (14 days). The default for this attribute is 345600 (4 days).
     */
    messageRetentionSeconds?: pulumi.Input<number>;
    /**
     * The name of the queue. Queue names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 80 characters long. For a FIFO (first-in-first-out) queue, the name must end with the `.fifo` suffix. If omitted, this provider will assign a random, unique name. Conflicts with `namePrefix`
     */
    name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * The JSON policy for the SQS queue.
     */
    policy?: pulumi.Input<string>;
    /**
     * The time for which a ReceiveMessage call will wait for a message to arrive (long polling) before returning. An integer from 0 to 20 (seconds). The default for this attribute is 0, meaning that the call will return immediately.
     */
    receiveWaitTimeSeconds?: pulumi.Input<number>;
    /**
     * The JSON policy to set up the Dead Letter Queue, see [AWS docs](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/SQSDeadLetterQueue.html). **Note:** when specifying `maxReceiveCount`, you must specify it as an integer (`5`), and not a string (`"5"`).
     */
    redrivePolicy?: pulumi.Input<string>;
    /**
     * A map of tags to assign to the queue. If configured with a provider `defaultTags` configuration block) present, tags with matching keys will overwrite those defined at the provider-level.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The visibility timeout for the queue. An integer from 0 to 43200 (12 hours). The default for this attribute is 30. For more information about visibility timeout, see [AWS docs](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/AboutVT.html).
     */
    visibilityTimeoutSeconds?: pulumi.Input<number>;
}
